(() => {
  const logo = document.querySelector(".site-title");
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  let nextGlitch;
  let endGlitch;

  const randomBetween = (minimum, maximum) =>
    Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;

  const glitch = () => {
    if (reducedMotion.matches || logo.classList.contains("is-glitching")) return;

    logo.classList.add("is-glitching");
    window.clearTimeout(endGlitch);
    endGlitch = window.setTimeout(() => {
      logo.classList.remove("is-glitching");
    }, randomBetween(120, 200));
  };

  const scheduleGlitch = () => {
    window.clearTimeout(nextGlitch);
    if (reducedMotion.matches) return;

    nextGlitch = window.setTimeout(() => {
      glitch();
      scheduleGlitch();
    }, randomBetween(6000, 10000));
  };

  const handleMotionPreference = () => {
    window.clearTimeout(nextGlitch);
    window.clearTimeout(endGlitch);
    logo.classList.remove("is-glitching");
    scheduleGlitch();
  };

  logo.addEventListener("mouseenter", glitch);
  logo.addEventListener("focus", glitch);
  reducedMotion.addEventListener("change", handleMotionPreference);
  scheduleGlitch();
})();
