const themeSwitch = document.querySelector(".switch__checkbox");
const body = document.querySelector("body");
const themes = ["light-theme", "dark-theme"];
let indexTheme = 0;

const saveTheme = (selected) => {
    localStorage.setItem("indexTheme", selected);
};

themeSwitch.addEventListener("click", () => {
    const toggled = themes.map((theme) => body.classList.toggle(theme));
    indexTheme = toggled.findIndex((el) => el);
    saveTheme(indexTheme);
});

(() => {
    indexTheme = localStorage.getItem("indexTheme") || indexTheme;
    const themeSelected = themes[indexTheme];
    if (!body.classList.contains(themeSelected))
        body.classList.add(themeSelected);
    if (indexTheme === "1") themeSwitch.checked = true;
    themes.forEach((theme) => {
        if (theme !== themeSelected) body.classList.remove(theme);
    });
})();
