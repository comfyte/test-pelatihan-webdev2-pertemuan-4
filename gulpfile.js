// gulpfile.js
// File konfigurasi Gulp (build tool)

// Impor modul yang diperlukan
const gulp = require("gulp");
const prettier = require("gulp-prettier");

// Kita assign ke variabel baru agar kode lebih terbaca
const src = gulp.src;
const dest = gulp.dest;

// Definisikan sebuah task untuk memformat file-file kode
function percantikKode() {
  return src(["./**/*", "!node_modules/**/*"]).pipe(prettier()).pipe(dest("."));
}

// Buat agar task tersebut bisa dijalankan dari luar
exports.default = percantikKode;
