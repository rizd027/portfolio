/**
 * Social media icons open in new tab
 */
const facebookBtn = document.getElementById('facebook-btn');
const instagramBtn = document.getElementById('instagram-btn');
const linkedinBtn = document.getElementById('linkedin-btn');

function openInNewTab(url) {
    var win = window.open(url, '_blank');
    win.focus();
}

if (facebookBtn) {
    facebookBtn.addEventListener('click', function (event) {
        event.preventDefault();
        openInNewTab('https://www.facebook.com/alfarizd027');
    });
}

if (instagramBtn) {
    instagramBtn.addEventListener('click', function (event) {
        event.preventDefault();
        openInNewTab('https://www.instagram.com/al_farizd/');
    });
}

if (linkedinBtn) {
    linkedinBtn.addEventListener('click', function (event) {
        event.preventDefault();
        openInNewTab('https://www.linkedin.com/in/mochamad-alfarizd-firmansah-515b86289/');
    });
}
