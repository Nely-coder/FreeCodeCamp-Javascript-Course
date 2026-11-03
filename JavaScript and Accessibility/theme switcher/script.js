const themes = [
  {
    name: "light",
    message: "Hello sunshine - Light theme is on",
  },
  {
    name: "dark",
    message: "The night is yours - Dark theme is on",
  },
  {
    name: "ocean",
    message: "Blue skies and high tides - Ocean theme is on",
  },
];

const themeSwitcher = document.getElementById("theme-switcher-button");
const themeDropdown = document.getElementById("theme-dropdown");
const themeColors = document.querySelectorAll("li");
const body = document.querySelector("body");
const liveRegion = document.querySelector('[aria-live="polite"]');

themeSwitcher.addEventListener("click", () => {
  const isCurrentlyHidden = themeDropdown.hasAttribute("hidden");

  if (isCurrentlyHidden) {
    themeDropdown.removeAttribute("hidden");
    themeSwitcher.setAttribute("aria-expanded", "true");
  } else {
    themeDropdown.setAttribute("hidden", "");
    themeSwitcher.setAttribute("aria-expanded", "false");
  }
});

themeColors.forEach((theme) => {
  theme.addEventListener("click", () => {
    const selectedTheme = theme.id.replace("theme-", "");

    const selectedThemeObj = themes.find((item) => item.name === selectedTheme);

    body.classList.remove("theme-light", "theme-dark", "theme-ocean");
    themeSwitcher.classList.remove("theme-light", "theme-dark", "theme-ocean");

    body.classList.add(`theme-${selectedTheme}`);
    themeSwitcher.classList.add(`theme-${selectedTheme}`);

    liveRegion.textContent = selectedThemeObj.message;

    themeDropdown.setAttribute("hidden", "");
    themeSwitcher.setAttribute("aria-expanded", "false");
  });
});

document.addEventListener("click", (e) => {
  const clickedOutside =
    !themeDropdown.contains(e.target) && !themeSwitcher.contains(e.target);

  if (!themeDropdown.hasAttribute("hidden") && clickedOutside) {
    themeDropdown.setAttribute("hidden", "");
    themeSwitcher.setAttribute("aria-expanded", "false");
  }
});
