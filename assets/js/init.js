'use strict';

/**
 * initialization
 */
document.addEventListener('DOMContentLoaded', function () {
    if (typeof translatePage === 'function') {
        translatePage('en'); // Terjemahkan halaman saat dimuat (default EN)
    }

    if (typeof AOS !== 'undefined') {
        AOS.init(); // Inisialisasi AOS setelah terjemahan selesai
    }
});
