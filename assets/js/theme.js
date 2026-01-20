/**
 * dark & light theme toggle
 */
const themeToggleBtn = document.querySelector("[data-theme-btn]");

if (themeToggleBtn) {
    themeToggleBtn.addEventListener("click", function () {
        this.classList.toggle("active");
        if (this.classList.contains("active")) {
            document.body.classList.remove("dark_theme");
            document.body.classList.add("light_theme");
            localStorage.setItem("theme", "light_theme");
        } else {
            document.body.classList.add("dark_theme");
            document.body.classList.remove("light_theme");
            localStorage.setItem("theme", "dark_theme");
        }
    });
}

/**
 * check & apply last time selected theme from localStorage
 */
if (localStorage.getItem("theme") === "light_theme") {
    if (themeToggleBtn) themeToggleBtn.classList.add("active");
    document.body.classList.remove("dark_theme");
    document.body.classList.add("light_theme");
} else {
    if (themeToggleBtn) themeToggleBtn.classList.remove("active");
    document.body.classList.remove("light_theme");
    document.body.classList.add("dark_theme");
}
