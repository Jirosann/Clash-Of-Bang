# Proyek: Clash of BaNG 🛡️✨

**Pembuat:** Muhammad Nabil Al Qadri  
**NIM:** 2802581830  
**Repository:** [https://github.com/Jirosann/Clash-Of-Bang](https://github.com/Jirosann/Clash-Of-Bang)

---

## 1. Deskripsi Aplikasi
Terinspirasi dari semesta *Clash-style*, **Clash of BaNG** adalah situs komunitas bergenre strategi fantasi gelap. Website ini berfungsi untuk menyajikan data pasukan, galeri visual, info komunitas, dan formulir pendaftaran anggota. 

Proyek ini dibangun secara murni menggunakan kombinasi **HTML, CSS, dan JavaScript vanilla** tanpa bantuan framework seperti Bootstrap.

---

## 2. Struktur Halaman
Website terdiri dari **5 halaman utama** yang saling terhubung melalui navigasi:

| Halaman | File | Deskripsi |
| :--- | :--- | :--- |
| **Home** | `index.html` | Halaman awal yang berisi hero banner, carousel berita, info singkat, dan sorotan pasukan terfavorit. |
| **Gallery** | `gallery.html` | Berisi kumpulan 6 kartu visual kreatif seputar dunia Clash of BaNG. |
| **Troops** | `troops.html` | Katalog 6 jenis karakter pasukan beserta detail status HP, DPS, Damage Type. |
| **About** | `about.html` | Memuat latar belakang komunitas, profil founder, titik kumpul regional, fasilitas komunitas, dan bar statistik. |
| **Register** | `register.html` | Halaman pendaftaran member baru dengan validasi data formulir secara otomatis. |

---

## 3. Struktur File Proyek
```text
clash-of-bang/
├── index.html                   # Halaman Utama (Home)
├── pages/                       # Direktori Khusus Halaman Konten
│   ├── gallery.html             # Halaman Gallery
│   ├── troops.html              # Halaman Troops
│   ├── about.html               # Halaman About
│   └── register.html            # Halaman Register (Form Pendaftaran)
├── css/
│   └── style.css                # Seluruh styling aplikasi (Vanilla CSS)
├── js/
│   └── script.js                # Logika interaktivitas & validasi formulir (DOM berkapsul)
└── assets/
    └── images/
        ├── Background2.jpg      # Latar belakang Hero Section (Home, Gallery)
        ├── Barbarian2.jpg       # Komponen gambar Popular Troops (Home, Gallery, Troops)
        ├── Shadow_Archer2.jpg   # Komponen gambar Popular Troops (Home, Gallery, Troops)
        ├── Shadow_knight2.jpg   # Komponen gambar kartu Troops (Home)
        ├── Shadow_knight333.jpg # Komponen gambar Popular Troops (Home)
        ├── Dragon_Lair2.jpg     # Komponen gambar kartu Fan Arts (Gallery)
        ├── Sanur_Citadel2.jpg   # Component gambar kartu Fan Arts (Gallery)
        ├── Magis2.jpg           # Komponen gambar Popular Troops (Troops)
        ├── Golem2.jpg           # Komponen gambar Popular Troops (Troops)
        ├── Goblin2.jpg          # Komponen gambar kartu Troops (Troops)
        └── Wallbreaker.jpg      # Komponen gambar Popular Troops (Troops)
```
## 4. Penjelasan Per Halaman

### 4.1 Home (`index.html`)
Halaman utama yang berfungsi sebagai beranda dan terbagi ke dalam empat seksi (*section*) utama:
* **Hero Section:** Menampilkan judul besar "Clash of BaNG", deskripsi sambutan komunitas, dan tombol CTA bertuliskan "Discover More" yang mengarah langsung ke bagian pembaruan (`#updates`).
* **Latest Updates (Carousel):** Menampilkan 3 kartu berita/artikel pembaruan terbaru menggunakan struktur komponen carousel yang dapat digeser secara interaktif melalui tombol navigasi panah kiri dan kanan. Komponen ini dirancang adaptif terhadap perubahan ukuran layar komputer maupun ponsel.
* **Brief Info (Feature Highlights):** Menyajikan 3 pilar keunggulan komunitas (Strategi, Turnamen Global, dan Hub Regional) yang dikemas dalam bentuk kartu informasi ringkas dengan teks penjelasan terperinci di bawahnya.
* **Featured Troops Showcase:** Menampilkan katalog cuplikan 3 kartu pasukan pilihan (Barbarian, Sneaky Archer, dan Shadow Knight). Pada setiap kartu, terdapat konten gambar visual, deskripsi peran pasukan, serta *Hover Stats Reveal* yang memunculkan statistik tempur mendalam (Hitpoints, DPS, dan Damage Type) saat disorot oleh kursor.

### 4.2 Gallery (`gallery.html`)
Halaman yang dirancang khusus untuk memajang karya seni komunitas (*Fan Arts*) dan visual dunia permainan. Halaman ini menggunakan sistem tata letak *grid layout* yang menampilkan 6 kartu galeri. Setiap kartu merangkum komponen:
* Bungkus gambar visual (*image wrapper*) dengan aset gambar yang adaptif.
* Konten teks berupa nama lokasi/peristiwa (seperti *The Great Siege*, *Dragon's Lair*, hingga *The Sanur Citadel*) beserta narasi cerita pelengkap di bawahnya.

### 4.3 Troops (`troops.html`)
Halaman direktori militer komprehensif yang menampilkan 6 kartu pasukan yang disusun rapi menggunakan struktur *responsive grid*. Setiap kartu pasukan menyajikan elemen informasi sebagai berikut:
* Gambar visual resmi karakter pasukan.
* Judul nama identitas unik pasukan.
* **Hover Stats Reveal (Overlay):** Panel informasi statistik instan yang akan otomatis muncul secara elegan di atas kartu ketika disorot pengguna, menampilkan 3 metrik spesifik: Hitpoints, DPS, serta Damage Type (seperti *Single Target* atau *Area Splash*).
* *Daftar resmi pasukan di dalam kode:* Barbarian, Sneaky Archer, Greedy Goblin, Ice Wizard, Golem Clay, dan Pyromancer Wizard.

### 4.4 About (`about.html`)
Halaman informasi latar belakang yang berfokus pada sejarah aliansi dan profil pengembang. Terdiri atas tiga seksi utama:
* **The History of BaNG (Milestones):** Narasi kronologis perjalanan komunitas dari forum kecil hingga menjadi komunitas bergengsi di Jakarta, Bandung, dan Sanur, yang dikemas dalam struktur *timeline box*.
* **Meet the Creators (Team Profile):** Menampilkan identitas resmi pengembang situs web ini, yaitu "Builder Of Clash of BaNG" dengan peran sebagai Developer yang dilengkapi dengan foto profil bulat (`Orang ganteng3.png`).
* **Stats & Footer Meta:** Baris informasi penutup yang menegaskan status komunitas sebagai platform independen hasil karya para penggemar (*Fan Community*) yang tidak berafiliasi langsung dengan pengembang resmi permainan.

### 4.5 Register (`register.html`)
Halaman pendaftaran anggota dengan field formulir sebagai berikut:

| Field | Tipe | Validasi |
| :--- | :--- | :--- |
| **Chief Name** | Text | Input nama wajib diisi (tidak boleh kosong). |
| **Email Address** | Email | Input surat elektronik wajib diisi dengan validasi keberadaan karakter `@` dan tanda titik `.`. |
| **Gender** | Radio | Opsi pilihan mutlak berpasangan antara *Male* atau *Female*. |
| **Member Age** | Number | Input numerik dengan batas rentang usia wajib antara 13 hingga 99 tahun. |
| **Favorite Troop** | Select | Menu pilihan wajib untuk menentukan salah satu dari 5 opsi pasukan (*Frenzied Barbarian, Sneaky Archer, Greedy Goblin, Shadow Knight, atau Pyromancer Wizard*). |
| **Reason to Join** | Textarea | Kolom alasan bergabung dengan syarat batas panjang karakter minimal sepanjang 15 karakter. |

> 💡 **Info Alur Sukses:** Jika semua data lolos dari pemeriksaan logika JavaScript, peramban akan memunculkan pesan notifikasi sukses (*alert window*) bertuliskan `"Success! Welcome to Clash of BaNG!"` dan seluruh isian formulir otomatis dikosongkan kembali secara bersih (*form reset*).

---

## 5. Fitur Teknis

### 🎨 CSS (`css/style.css`)
* Menggunakan **CSS Custom Properties (variables)** untuk warna tema (gold, orange, black, grey).
* Tidak menggunakan library CSS eksternal – seluruh styling ditulis manual.
* **Responsif** dengan dua breakpoint utama:
    * **Tablet (769px – 1024px):** Grid berubah menjadi 2 kolom, ukuran font dikurangi.
    * **Mobile (≤ 768px):** Layout berubah menjadi *single column*, header bertumpuk secara vertikal (*stack vertikal*).

### ⚡ JavaScript (`js/script.js`)
* **Penyatuan Berkas Skrip:** Seluruh logika interaktivitas halaman (baik carousel beranda maupun pengecekan formulir registrasi) disatukan secara rapi di dalam satu berkas berkapsul DOM `script.js`.
* **Mekanisme Carousel Berputar (Looping):** Menggeser letak komidi putar dengan memanfaatkan kalkulasi lebar slide lewat `transform: translateX()`. Komponen ini dibekali fitur *loop back* otomatis: ketika berada di slide terakhir dan menekan tombol next, posisi akan kembali ke indeks 0, dan jika berada di slide pertama menekan tombol prev, posisi langsung melompat ke slide paling akhir. Penambahan *event listener* `resize` menjamin letak slide tidak bergeser saat ukuran peramban diubah.
* **Evaluasi Formulir Komprehensif:** Validasi dipicu langsung saat form mendeteksi aksi pengiriman (`registerForm.addEventListener('submit', ...)` disertai `e.preventDefault()`).
* **Pengecekan Manual Tanpa Regex:** Pemeriksaan format email dijalankan secara prosedural menggunakan fungsi bawaan `indexOf('@')` dan `indexOf('.')`.
* **Manajemen Pesan Kesalahan:** Error dimunculkan dengan menyisipkan teks langsung ke elemen `.error-message` dan mengaktifkan visualisasi warna peringatan (`--danger`). Setiap kali tombol submisi ditekan ulang, fungsi pembasmi error (`clearError()`) akan dipicu terlebih dahulu untuk membersihkan sisa peringatan sebelumnya.

---

## 6. Desain Visual
* **Tema Skema Warna:** Mengadopsi nuansa gelap mistis permainan strategi dengan kombinasi warna latar belakang Slate Gelap (`--bg-dark: #0f172a`), warna dasar kartu (`--bg-card: #1e293b`), warna penegas Biru Magis (`--primary: #3b82f6`), serta pendaran warna Emas Kelas Tinggi (`--accent: #fbbf24`) untuk memunculkan efek visual yang mewah (`--shadow-glow`).
* **Sistem Tipografi Tepercaya:** Menggunakan kombinasi rumpun huruf bawaan sistem operasional (*sans-serif* untuk kenyamanan membaca teks ulasan/isi dan *serif* untuk memberikan kesan klasik/tegas pada tajuk judul utama).
* **Efek Interaksi & Edukasi:** Variabel `--transition: none` sengaja diterapkan secara eksplisit untuk menonaktifkan efek animasi transisi rumit agar kode lebih bersih, minimalis, dan sangat mudah dipelajari oleh pemula. Interaksi difokuskan pada manipulasi visibilitas *Hover Stats Reveal* (panel statistik petarung muncul instan saat kursor melintas di atas kartu).
* **Header & Arsitektur Navigasi:** Bilah menu (*header*) dirancang melayang secara transparan tepat di atas struktur *Hero section* pada halaman beranda utama (`index.html`), memberikan kesan menyatu yang elegan dengan latar belakang visual.

---

## 7. Cara Menjalankan

Proyek ini sangat ringan karena **tidak memerlukan instalasi atau build tool**.

### Panduan Operasional Lokal:
1. **Salin atau unduh** seluruh folder repositori proyek ini ke penyimpanan komputer Anda.
2. **Buka file** `index.html`. Anda bisa langsung klik kanan pada berkas `index.html` dan pilih peramban utama Anda (*Google Chrome, Mozilla Firefox, Microsoft Edge, atau Safari*).
3. **Rekomendasi Pengembangan:** Untuk pengalaman pengembangan yang lebih optimal dengan fitur muat ulang otomatis (*auto-reload*), Anda sangat direkomendasikan menjalankan proyek ini memanfaatkan ekstensi **Live Server** di dalam teks editor **VS Code**.

---

## 🔗 Referensi Aset

Berikut adalah daftar lengkap referensi tautan aset gambar yang digunakan dalam proyek ini:

### Home Page
* [Unsplash - Miniature Soldiers](https://unsplash.com/photos/miniature-soldiers-march-past-a-stone-fort-Jxt9QumG1mo)
* [Unsplash - Man with Sword and Beard](https://unsplash.com/photos/a-man-with-a-sword-and-a-beard-mH0cdRaqY90)
* [Unsplash - Man Holding Archer Statue](https://unsplash.com/photos/man-holding-archer-statue-Bc5LK1XqbCc)
* [Pexels - Man in Armor](https://www.pexels.com/photo/man-in-armor-and-with-sword-19249701/)

### Gallery Page
* [Unsplash - Miniature Soldiers](https://unsplash.com/photos/miniature-soldiers-march-past-a-stone-fort-Jxt9QumG1mo)
* [Unsplash - Man with Sword and Beard](https://unsplash.com/photos/a-man-with-a-sword-and-a-beard-mH0cdRaqY90)
* [Unsplash - Dragon on Gray Building](https://unsplash.com/photos/shallow-focus-photo-of-dragon-on-gray-building-F6920BvzrZE)
* [Unsplash - Ancient Buildings Riverbank](https://unsplash.com/photos/ancient-buildings-and-temples-line-a-riverbank-with-boats-Ec9CPo6bL4E)
* [Unsplash - Man Holding Archer Statue](https://unsplash.com/photos/man-holding-archer-statue-Bc5LK1XqbCc)

### Troops Page
* [Unsplash - Man with Sword and Beard](https://unsplash.com/photos/a-man-with-a-sword-and-a-beard-mH0cdRaqY90)
* [Pixabay - Golem Search](https://pixabay.com/id/images/search/golem/)
* [Pixabay - AI Generated Goblin](https://pixabay.com/id/illustrations/ai-dihasilkan-goblin-makhluk-8887758/)
* [Unsplash - Person Holding Pillar Candle](https://unsplash.com/photos/person-holding-white-pillar-candle-AvqFUEoo_eg)
* [Unsplash - Man Holding Archer Statue](https://unsplash.com/photos/man-holding-archer-statue-Bc5LK1XqbCc)
* [Pexels - Asset 35982173](https://www.pexels.com/id-id/foto/35982173/)
   
