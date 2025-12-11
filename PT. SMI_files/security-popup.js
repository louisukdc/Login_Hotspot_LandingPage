// Deklarasi variabel untuk elemen pop-up dan overlay
let popup = document.getElementById("security-popup");
let overlay = document.getElementById("overlay");

// Fungsi untuk menampilkan pop-up dan overlay
function openPopup() {
    // Memeriksa apakah elemen pop-up dan overlay ada sebelum menambahkan kelas
    if (popup && overlay) {
        popup.classList.add("open-popup");
        overlay.classList.add("open-overlay");
    }
}

// Fungsi untuk menyembunyikan pop-up, overlay, dan mengarahkan fokus ke username
function closePopup() {
    if (popup && overlay) {
        popup.classList.remove("open-popup");
        overlay.classList.remove("open-overlay");
    }
    
    // Set fokus ke input username
    // Perintah ini diasumsikan berjalan setelah elemen login tersedia
    if (document.login && document.login.username) {
        document.login.username.focus();
    }
}

// Panggil openPopup() segera setelah DOM selesai dimuat
document.addEventListener('DOMContentLoaded', (event) => {
    // Pastikan DOM sudah siap sebelum mencoba menampilkan pop-up
    openPopup();
});

// Awalnya, coba fokus pada username, tapi ini akan segera ditimpa oleh openPopup
if (document.login && document.login.username) {
    document.login.username.focus();
}