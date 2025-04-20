// Simpan nilai
localStorage.setItem("theme", "dark");

// Ambil nilai
const theme = localStorage.getItem("theme");
console.log("Current theme:", theme);

// Hapus
localStorage.removeItem("theme");
