import gsap from "gsap";
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";

gsap.registerPlugin(ScrambleTextPlugin);

const ANIMATION_STEPS = [16, 13, 10, 8, 6.5, 5.2, 4.2, 3.75] as const;
const LAST_STEP = ANIMATION_STEPS.length - 1;
const SKIP_INTRO_STORAGE_KEY = "skip-wordmark-intro-once";
const SCRAMBLE_HOLD_DURATION = 0.35;
const SCRAMBLE_DURATION = 1.1;
const SCALE_DURATION = 0.95;
const REVEAL_PROGRESS = 0.88;
const SCRAMBLE_CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%&*+-?";

type InitWordmarkIntroOptions = {
	wordmark: HTMLElement | null;
	body?: HTMLBodyElement | null;
	finalText: string;
};

const clamp = (value: number, min: number, max: number) =>
	Math.min(max, Math.max(min, value));

const lerp = (start: number, end: number, amount: number) =>
	start + (end - start) * amount;

const createScrambledText = (length: number) =>
	Array.from({ length }, () =>
		SCRAMBLE_CHARS[Math.floor(Math.random() * SCRAMBLE_CHARS.length)],
	).join("");

const getLengthScale = (length: number) => clamp(4 / length, 0.58, 1);

const toFontSize = (progress: number, textLength: number) => {
	const value = clamp(progress, 0, LAST_STEP);
	const index = Math.floor(value);
	const nextIndex = Math.min(index + 1, LAST_STEP);
	const t = value - index;
	const size = lerp(ANIMATION_STEPS[index], ANIMATION_STEPS[nextIndex], t);
	const lengthScale = getLengthScale(textLength);
	const progressRatio = LAST_STEP === 0 ? 1 : value / LAST_STEP;
	const dynamicScale = lerp(lengthScale, 1, progressRatio);
	const adjustedSize = size * dynamicScale;

	return `clamp(${(adjustedSize * 0.3).toFixed(2)}rem, ${(adjustedSize * 3.5).toFixed(2)}vw, ${adjustedSize.toFixed(2)}rem)`;
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

	const shouldSkipIntro = (() => {
		try {
			const value = window.sessionStorage.getItem(SKIP_INTRO_STORAGE_KEY);
			if (value === "true") {
				window.sessionStorage.removeItem(SKIP_INTRO_STORAGE_KEY);
				return true;
			}
		} catch {}

		return false;
	})();

	const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

	if (!(wordmark instanceof HTMLElement) || reducedMotion.matches || shouldSkipIntro) {
		if (wordmark instanceof HTMLElement) {
			wordmark.textContent = finalText;
			wordmark.style.fontSize = toFontSize(LAST_STEP, finalText.length);
		}

		reveal();
		return;
	}

	wordmark.textContent = createScrambledText(finalText.length);
	wordmark.style.fontSize = toFontSize(0, finalText.length);
	wordmark.style.display = "block";
	wordmark.style.width = "100%";
	wordmark.style.textAlign = "center";

	let hasRevealed = false;

	const timeline = gsap.timeline();

	timeline.to({}, { duration: SCRAMBLE_HOLD_DURATION });

	timeline.to(wordmark, {
		duration: SCRAMBLE_DURATION,
		ease: "none",
		scrambleText: {
			text: finalText,
			chars: SCRAMBLE_CHARS,
			revealDelay: 0.4,
			speed: 0.4,
			tweenLength: false,
		},
	});

	timeline.call(() => {
		wordmark.style.display = "";
		wordmark.style.width = "";
		wordmark.style.textAlign = "";
	});

	timeline.to(wordmark, {
		duration: SCALE_DURATION,
		ease: "power3.out",
		fontSize: toFontSize(LAST_STEP, finalText.length),
		onUpdate() {
			if (!hasRevealed && this.progress() >= REVEAL_PROGRESS) {
				hasRevealed = true;
				reveal();
			}
		},
		onComplete() {
			wordmark.style.fontSize = toFontSize(LAST_STEP, finalText.length);
			if (!hasRevealed) {
				reveal();
			}
		},
	});
};
