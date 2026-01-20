/**
 * project modal logic
 */
const projectModal = document.querySelector("[data-project-modal]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const modalContent = document.querySelector("[data-modal-content]");
const projectLinks = document.querySelectorAll(".project-card");

projectLinks.forEach(link => {
    link.addEventListener("click", function (e) {
        const href = this.getAttribute("href");

        // Check if link should open in modal
        if (href && href.includes("mini-pages")) {
            e.preventDefault();

            // Reset content and show loading
            if (modalContent) modalContent.innerHTML = "<p style='text-align: center; padding: 50px;'>Loading...</p>";
            if (projectModal) projectModal.classList.add("active");
            document.body.classList.add("active"); // Prevent body scroll

            // Fetch external HTML
            fetch(href)
                .then(response => {
                    if (!response.ok) throw new Error('Network response was not ok');
                    return response.text();
                })
                .then(data => {
                    // Inject content
                    if (modalContent) modalContent.innerHTML = data;
                })
                .catch(err => {
                    if (modalContent) modalContent.innerHTML = `<p style='text-align: center; padding: 50px;'>Error: Could not load content. Check if the file exists at: <br> ${href}</p>`;
                    console.error('Fetch error:', err);
                });
        }
    });
});

const closeModal = () => {
    if (projectModal) projectModal.classList.remove("active");
    document.body.classList.remove("active");
};

if (modalCloseBtn) modalCloseBtn.addEventListener("click", closeModal);
if (projectModal) {
    projectModal.addEventListener("click", (e) => {
        if (e.target === projectModal) closeModal();
    });
}

// Close modal on Esc key
window.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && projectModal && projectModal.classList.contains("active")) {
        closeModal();
    }
});
