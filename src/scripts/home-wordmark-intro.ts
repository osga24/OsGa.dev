import { initWordmarkIntro } from "../utils/wordmark-intro";

const wordmark = document.getElementById("wordmark");
const skipIntroLinks =
  document.querySelectorAll<HTMLAnchorElement>("[data-skip-intro]");

skipIntroLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    if (
      event.defaultPrevented ||
      event.button !== 0 ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey
    ) {
      return;
    }

    try {
      window.sessionStorage.setItem("skip-wordmark-intro-once", "true");
    } catch {}
  });
});

initWordmarkIntro({
  wordmark,
  finalText: "OsGa.dev",
});
