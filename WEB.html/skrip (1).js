// script.js

document.addEventListener("DOMContentLoaded", () => {
    // 1. Targetkan elemen yang ingin diberi animasi
    // Kita pilih section, kartu struktur, dan kartu proker
    const targets = document.querySelectorAll('section, .grid > div, .flex > div');

    // 2. Tambahkan class dasar animasi ke semua target secara otomatis
    targets.forEach(el => {
        el.classList.add('reveal-on-scroll');
    });

    // 3. Konfigurasi Intersection Observer
    const observerOptions = {
        threshold: 0.15 // Animasi jalan jika 15% elemen sudah masuk layar
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                // Berhenti mengamati jika sudah muncul (agar animasi cuma sekali)
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // 4. Mulai mengamati setiap elemen
    targets.forEach(target => {
        observer.observe(target);
    });
});