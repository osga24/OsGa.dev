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
			wordmark.style.fontSize = toFontSize(LAST_STEP);
		}

		reveal();
		return;
	}

	wordmark.textContent = createScrambledText(finalText.length);
	wordmark.style.fontSize = toFontSize(0);

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

	timeline.to(wordmark, {
		duration: SCALE_DURATION,
		ease: "power3.out",
		fontSize: toFontSize(LAST_STEP),
		onUpdate() {
			if (!hasRevealed && this.progress() >= REVEAL_PROGRESS) {
				hasRevealed = true;
				reveal();
			}
		},
		onComplete() {
			wordmark.style.fontSize = toFontSize(LAST_STEP);
			if (!hasRevealed) {
				reveal();
			}
		},
	});
};
