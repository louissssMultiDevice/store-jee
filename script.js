/* ============================= */
/* 1. VARIABEL WARNA UNTUK TEMA */
/* ============================= */

/* LIGHT THEME: Kuning (Terang) */
.light-theme {
    --color-primary-main: #FFEB3B; /* Kuning Neon/Emas */
    --color-primary-accent: #FFC107; /* Kuning Aksen */
    --color-primary-bg: #FFFFFF; /* Putih */
    --color-secondary-bg: #F5F5F5; /* Abu Muda */
    --color-primary-text: #1a1a1a; /* Hitam */
}

/* DARK THEME: Biru Tua + Abu + Hitam */
.dark-theme {
    --color-primary-main: #FFEB3B; /* Tetap Kuning Neon */
    --color-primary-accent: #1E90FF; /* Biru Neon untuk Aksen */
    --color-primary-bg: #121212; /* Hitam Gelap */
    --color-secondary-bg: #1a1a1a; /* Abu Gelap */
    --color-primary-text: #E0E0E0; /* Abu Terang */
}

/* Penerapan variabel di Tailwind */
.bg-primary-bg { background-color: var(--color-primary-bg); }
.text-primary-text { color: var(--color-primary-text); }
.text-primary-main { color: var(--color-primary-main); }
.bg-primary-main { background-color: var(--color-primary-main); }
.border-primary-main { border-color: var(--color-primary-main); }
.border-primary-accent\/20 { border-color: color-mix(in srgb, var(--color-primary-accent) 20%, transparent); }
.bg-secondary-bg { background-color: var(--color-secondary-bg); }
.bg-primary-bg\/70 { background-color: color-mix(in srgb, var(--color-primary-bg) 70%, transparent); }
.bg-primary-accent\/20 { background-color: color-mix(in srgb, var(--color-primary-accent) 20%, transparent); }

/* ============================= */
/* 2. ANIMASI & EFEK AESTHETIC */
/* ============================= */

/* Efek Glow untuk Tombol WA */
.button-wa-glow {
    box-shadow: 0 0 15px rgba(52, 211, 153, 0.8); /* Hijau WA */
}
.dark-theme .button-wa-glow {
    box-shadow: 0 0 20px var(--color-primary-main); /* Kuning Neon */
}

/* Efek Shadow Teks Hero */
.hero-text-shadow {
    text-shadow: 4px 4px 10px rgba(0, 0, 0, 0.5);
}
.light-theme .hero-text-shadow {
    text-shadow: 4px 4px 10px rgba(0, 0, 0, 0.2);
}

/* Animasi Tombol Neon */
.button-neon {
    box-shadow: 0 0 15px var(--color-primary-main), 0 0 5px var(--color-primary-main);
}
.button-neon-small {
    box-shadow: 0 0 5px var(--color-primary-main);
}
.button-neon:hover {
    box-shadow: 0 0 25px var(--color-primary-main), 0 0 10px var(--color-primary-main);
}

/* Animasi Glitch pada Logo (hanya contoh sederhana) */
@keyframes glitch {
    0% { transform: translate(0); }
    20% { transform: translate(-2px, 2px); }
    40% { transform: translate(-2px, -2px); }
    60% { transform: translate(2px, 2px); }
    80% { transform: translate(2px, -2px); }
    100% { transform: translate(0); }
}

.logo-glitch:hover {
    animation: glitch 0.3s infinite alternate;
}

/* Efek Kartu Produk saat Hover */
.product-card:hover {
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.4);
    border-color: var(--color-primary-main);
    }
