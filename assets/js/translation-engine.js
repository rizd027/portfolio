/**
 * translation engine
 */
function translatePage(language) {
    document.querySelectorAll('[data-translate]').forEach((element) => {
        const textKey = element.getAttribute('data-translate');
        if (translations[textKey]) {
            element.textContent = translations[textKey][language];
        }
    });
}
