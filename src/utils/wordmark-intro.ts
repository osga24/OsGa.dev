const ANIMATION_STEPS = [16, 13, 10, 8, 6.5, 5.2, 4.2, 3.75] as const;
const LAST_STEP = ANIMATION_STEPS.length - 1;
const STIFFNESS = 20;
const DAMPING = 15;
const MASS = 3;
const REVEAL_PROGRESS = 0.72;

type InitWordmarkIntroOptions = {
  wordmark: HTMLElement | null;
  body?: HTMLBodyElement | null;
  finalText: string;
};

const clamp = (value: number, min: number, max: number) =>
  Math.min(max, Math.max(min, value));

const lerp = (start: number, end: number, amount: number) =>
  start + (end - start) * amount;

const toFontSize = (progress: number) => {
  const value = clamp(progress, 0, LAST_STEP);
  const index = Math.floor(value);
  const nextIndex = Math.min(index + 1, LAST_STEP);
  const t = value - index;
  const size = lerp(ANIMATION_STEPS[index], ANIMATION_STEPS[nextIndex], t);

  return `clamp(${(size * 0.3).toFixed(2)}rem, ${(size * 3.5).toFixed(2)}vw, ${size.toFixed(2)}rem)`;
};

export const initWordmarkIntro = ({
  wordmark,
  body = document.body,
  finalText,
}: InitWordmarkIntroOptions) => {
  if (!(body instanceof HTMLBodyElement)) {
    return;
  }

  const reveal = () => {
    body.classList.add("is-expanded");
  };

  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

  if (!(wordmark instanceof HTMLElement) || reducedMotion.matches) {
    if (wordmark instanceof HTMLElement) {
      wordmark.textContent = finalText;
      wordmark.style.fontSize = toFontSize(LAST_STEP);
    }

    reveal();
    return;
  }

  wordmark.textContent = finalText;

  let current = 0;
  let velocity = 0;
  let hasRevealed = false;
  let previousTime = performance.now();

  const tick = (time: number) => {
    const delta = Math.min((time - previousTime) / 1000, 0.064);
    previousTime = time;

    const displacement = current - LAST_STEP;
    const springForce = -STIFFNESS * displacement;
    const dampingForce = -DAMPING * velocity;
    const acceleration = (springForce + dampingForce) / MASS;

    velocity += acceleration * delta;
    current += velocity * delta;
    wordmark.style.fontSize = toFontSize(current);

    if (!hasRevealed && current >= LAST_STEP * REVEAL_PROGRESS) {
      hasRevealed = true;
      reveal();
    }

    const isSettled =
      Math.abs(velocity) < 0.01 && Math.abs(LAST_STEP - current) < 0.01;

    if (!isSettled) {
      requestAnimationFrame(tick);
      return;
    }

    wordmark.style.fontSize = toFontSize(LAST_STEP);
    if (!hasRevealed) {
      reveal();
    }
  };

  wordmark.style.fontSize = toFontSize(0);
  requestAnimationFrame(tick);
};
