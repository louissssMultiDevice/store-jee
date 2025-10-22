document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const html = document.documentElement;
    const sunIcon = document.getElementById('sun-icon');
    const moonIcon = document.getElementById('moon-icon');

    // 1. Fungsi untuk mengatur tema
    const setTheme = (theme) => {
        if (theme === 'dark') {
            html.classList.remove('light-theme');
            html.classList.add('dark-theme');
            sunIcon.style.display = 'block';
            moonIcon.style.display = 'none';
            localStorage.setItem('theme', 'dark');
        } else {
            html.classList.remove('dark-theme');
            html.classList.add('light-theme');
            sunIcon.style.display = 'none';
            moonIcon.style.display = 'block';
            localStorage.setItem('theme', 'light');
        }
    };

    // 2. Cek tema tersimpan saat halaman dimuat
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);

    // 3. Event Listener untuk tombol ganti tema
    themeToggle.addEventListener('click', () => {
        const currentTheme = html.classList.contains('light-theme') ? 'light' : 'dark';
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
    });
    
    // 4. Implementasi Animasi Scroll (jika dibutuhkan, bisa dikembangkan dengan library seperti AOS)
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in'); // Ganti dengan class animasi yang sesuai
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
    });

    console.log("JEEKAGENOU Store Loaded: SUPER-RISE Mode Active!");
});
