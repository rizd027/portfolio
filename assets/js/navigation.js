/**
 * element toggle function
 */
const elemToggleFunc = function (elem) {
    elem.classList.toggle("active");
}

/**
 * custom language dropdown
 */
const langBtn = document.querySelector("[data-lang-btn]");
const langList = document.querySelector("[data-lang-list]");
const langItems = document.querySelectorAll("[data-lang-item]");
const langText = document.querySelector("[data-lang-text]");

if (langBtn) {
    langBtn.addEventListener("click", function () {
        elemToggleFunc(langBtn);
        elemToggleFunc(langList);
    });
}

langItems.forEach(item => {
    item.addEventListener("click", function () {
        const selectedLang = this.getAttribute("data-lang-item");

        // Update active state in UI
        langItems.forEach(i => i.classList.remove("active"));
        this.classList.add("active");

        // Update button text
        langText.textContent = selectedLang.toUpperCase();

        // Close dropdown
        langBtn.classList.remove("active");
        langList.classList.remove("active");

        // Translate page
        if (typeof translatePage === 'function') {
            translatePage(selectedLang);
        }
    });
});

// Close dropdown when clicking outside
window.addEventListener("click", function (e) {
    if (langBtn && !langBtn.contains(e.target) && langList && !langList.contains(e.target)) {
        langBtn.classList.remove("active");
        langList.classList.remove("active");
    }
});

/**
 * header sticky & go to top
 */
const header = document.querySelector("[data-header]");
const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function () {
    if (window.scrollY >= 10) {
        if (header) header.classList.add("active");
        if (goTopBtn) goTopBtn.classList.add("active");
    } else {
        if (header) header.classList.remove("active");
        if (goTopBtn) goTopBtn.classList.remove("active");
    }
});

/**
 * navbar toggle
 */
const navToggleBtn = document.querySelector("[data-nav-toggle-btn]");
const navbar = document.querySelector("[data-navbar]");
const navbarLinks = document.querySelectorAll(".navbar-link");

if (navToggleBtn) {
    navToggleBtn.addEventListener("click", function () {
        elemToggleFunc(navToggleBtn);
        elemToggleFunc(navbar);
        elemToggleFunc(document.body);
    });
}

// Function to close the navbar
function closeNavbar() {
    if (navToggleBtn) elemToggleFunc(navToggleBtn);
    if (navbar) elemToggleFunc(navbar);
    elemToggleFunc(document.body);
}

// Add click event listener to each navbar link
navbarLinks.forEach(function (link) {
    link.addEventListener('click', closeNavbar);
});

/**
 * skills toggle
 */
const toggleBtnBox = document.querySelector("[data-toggle-box]");
const toggleBtns = document.querySelectorAll("[data-toggle-btn]");
const skillsBox = document.querySelector("[data-skills-box]");

if (toggleBtns) {
    for (let i = 0; i < toggleBtns.length; i++) {
        toggleBtns[i].addEventListener("click", function () {
            elemToggleFunc(toggleBtnBox);
            for (let j = 0; j < toggleBtns.length; j++) { elemToggleFunc(toggleBtns[j]); }
            elemToggleFunc(skillsBox);
        });
    }
}
/**
 * hide hero side elements (socials & scroll) on contact section
 */
const contactSection = document.querySelector("#contact");
const sideElements = document.querySelectorAll("[data-floating-element]");

if (contactSection && sideElements.length > 0) {
    const observerOptions = {
        root: null,
        threshold: 0.1
    };

    const contactObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                sideElements.forEach(el => el.classList.add("hidden"));
            } else {
                sideElements.forEach(el => el.classList.remove("hidden"));
            }
        });
    }, observerOptions);

    contactObserver.observe(contactSection);
}
