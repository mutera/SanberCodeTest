// Fungsi untuk menghitung akar pangkat 2 dari bilangan x
function hitungAkar(x) {
    // Cek apakah x kurang dari 0
    if (x < 0) {
        return "Tidak bisa input bilangan negatif";
    }

    // Cek apakah x adalah bilangan ganjil
    if (x % 2 !== 0) {
        return "Tidak bisa input bilangan ganjil";
    }

    // Hitung akar pangkat 2 jika x memenuhi syarat
    const akar = Math.sqrt(x);
    return `Akar pangkat 2 dari ${x} adalah ${akar}`;
}

// Contoh penggunaan
console.log(hitungAkar(-4));  // Output: Tidak bisa input bilangan negatif
console.log(hitungAkar(7));   // Output: Tidak bisa input bilangan ganjil
console.log(hitungAkar(16));  // Output: Akar pangkat 2 dari 16 adalah 4
