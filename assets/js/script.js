'use strict';

const translations = {
  'Home.': { en: 'Home.', id: 'Beranda.' },
  'About.': { en: 'About.', id: 'Tentang.' },
  'Skills.': { en: 'Skills.', id: 'Keterampilan.' },
  'Portfolio.': { en: 'Portfolio.', id: 'Portofolio.' },
  'Contact.': { en: 'Contact.', id: 'Kontak.' },
  'heroTitle': { en: 'I Design & Build Creative Products', id: 'Saya Mendesain & Membangun Produk Kreatif'},
  'Get in touch': { en: 'Get in touch', id: 'Hubungi Saya'},
  'aboutme': { en: 'About Me', id: 'Tentang Saya'},
  'secAboutme': { en: 'Need a Creative Product? I can Help You!', id: 'Butuh Produk Kreatif? Saya bisa bantu anda!'},
  'aboutSubtitle': { 
   en: 'Hi! I’m Alfarizd, and I’m a Frontend Developer who has passion for building clean web design with intuitive functionalities. I enjoy the process of turning ideas into reality using creative solutions. I’m always curious about learning new skills, tools, and concepts.', 
   id: 'Hai! Saya Alfarizd, seorang Frontend Developer yang memiliki passion dalam membangun desain web bersih dengan fungsionalitas yang intuitif. Saya menikmati proses mengubah ide menjadi kenyataan menggunakan solusi kreatif. Saya selalu ingin belajar keterampilan, alat, dan konsep baru.'},
  'hireMe': { 
   en: 'Hire Me', 
   id: 'Rekrut Saya'},
  'downloadCv': { 
   en: 'Download CV', 
   id: 'Unduh CV'},
  'myskills': { 
   en: 'My Skills', 
   id: 'Keahlian Saya'},
  'h3sectitle': { 
   en: 'What My Programming Skills Included?', 
   id: 'Apa Saja yang Termasuk Keahlian Pemrograman Saya?'},
  'h3sectext': { 
   en: 'I develop simple, intuitive and responsive user interface that helps users get things done with less effort and time with those technologies.', 
   id: 'Saya mengembangkan antarmuka pengguna yang sederhana, intuitif, dan responsif yang membantu pengguna menyelesaikan berbagai hal dengan lebih sedikit usaha dan waktu dengan teknologi tersebut.'},  
  'mywork': { 
   en: 'my work', 
   id: 'karya saya'},
  'h3sectitleproject': { 
   en: 'See My Works Which Will Amaze You!', 
   id: 'Lihat Karya Saya Yang Akan Membuat Anda Terkagum-kagum!'},
  'sectextproject': { 
   en: 'We develop the best quality website that serves for the long-term. Well-documented, clean, easy and elegant interface helps any non-technical clients.', 
   id: 'Kami mengembangkan website berkualitas terbaik yang berfungsi jangka panjang. Antarmuka yang bersih, dokumentasi dengan baik, mudah, dan elegan membantu klien non-teknis.'},
  'contactv2': { 
   en: 'contact', 
   id: 'kontak'},
  'contactv3': { 
   en: 'Want to order services? Please Drop a Message', 
   id: 'Ingin memesan jasa? Silakan Kirim Pesan'},
  'contactv4': { 
   en: 'Get in touch and let me know how i can help. Fill out the form and i’ll be in touch as soon as possible.', 
   id: 'Hubungi saya dan beri tahu saya bagaimana saya bisa membantu. Isi formulir dan saya akan menghubungi Anda sesegera mungkin.'},
  'addressv2': { 
   en: 'address', 
   id: 'alamat'},
  'phonev2': { 
   en: 'phone', 
   id: 'telepon'},
  'years': { 
   en: 'Years of Experience', 
   id: 'Tahun Pengalaman'},
  'workclr': { 
   en: 'Completed Projects', 
   id: 'Project Selesai'},
  'happycln': { 
   en: 'Happy Clients', 
   id: 'Klien Senang'},



  // ... (Tambahkan terjemahan untuk elemen-elemen lainnya)
};

function translatePage(language) {
  document.querySelectorAll('[data-translate]').forEach((element) => {
    const textKey = element.getAttribute('data-translate');
    if (translations[textKey]) {
      element.textContent = translations[textKey][language];
    }
  });
}

function changeLanguage() {
  const selectedLanguage = document.getElementById('lang').value;
  translatePage(selectedLanguage);
}

document.getElementById('lang').addEventListener('change', changeLanguage);

document.addEventListener('DOMContentLoaded', function () {
  changeLanguage(); // Terjemahkan halaman saat dimuat
  AOS.init(); // Inisialisasi AOS setelah terjemahan selesai
});

/**
 * element toggle function
 */
const elemToggleFunc = function (elem) {
  elem.classList.toggle("active");
}

/**
 * header sticky & go to top
 */
const header = document.querySelector("[data-header]");
const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 10) {
    header.classList.add("active");
    goTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    goTopBtn.classList.remove("active");
  }
});

/**
 * navbar toggle
 */
const navToggleBtn = document.querySelector("[data-nav-toggle-btn]");
const navbar = document.querySelector("[data-navbar]");
const navbarLinks = document.querySelectorAll(".navbar-link"); // New line

navToggleBtn.addEventListener("click", function () {
  elemToggleFunc(navToggleBtn);
  elemToggleFunc(navbar);
  elemToggleFunc(document.body);
});

// Function to close the navbar
function closeNavbar() {
  elemToggleFunc(navToggleBtn);
  elemToggleFunc(navbar);
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

for (let i = 0; i < toggleBtns.length; i++) {
  toggleBtns[i].addEventListener("click", function () {
    elemToggleFunc(toggleBtnBox);
    for (let i = 0; i < toggleBtns.length; i++) { elemToggleFunc(toggleBtns[i]); }
    elemToggleFunc(skillsBox);
  });
}

/**
 * dark & light theme toggle
 */
const themeToggleBtn = document.querySelector("[data-theme-btn]");

themeToggleBtn.addEventListener("click", function () {
  elemToggleFunc(themeToggleBtn);
  if (themeToggleBtn.classList.contains("active")) {
    document.body.classList.remove("dark_theme");
    document.body.classList.add("light_theme");
    localStorage.setItem("theme", "light_theme");
  } else {
    document.body.classList.add("dark_theme");
    document.body.classList.remove("light_theme");
    localStorage.setItem("theme", "dark_theme");
  }
});

/**
 * check & apply last time selected theme from localStorage
 */
if (localStorage.getItem("theme") === "light_theme") {
  themeToggleBtn.classList.add("active");
  document.body.classList.remove("dark_theme");
  document.body.classList.add("light_theme");
} else {
  themeToggleBtn.classList.remove("active");
  document.body.classList.remove("light_theme");
  document.body.classList.add("dark_theme");
}

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

facebookBtn.addEventListener('click', function (event) {
  event.preventDefault();
  openInNewTab('https://www.facebook.com/alfarizd027');
});

instagramBtn.addEventListener('click', function (event) {
  event.preventDefault();
  openInNewTab('https://www.instagram.com/al_farizd/');
});

linkedinBtn.addEventListener('click', function (event) {
  event.preventDefault();
  openInNewTab('https://www.linkedin.com/in/mochamad-alfarizd-firmansah-515b86289/');
});

