function hitungAkar(x) {
    if (x < 0) {
        return "Error: Tidak bisa input bilangan negatif";
    } else if (x % 2 !== 0) {
        return "Error: Tidak bisa input bilangan ganjil";
    } else {
        return `Akar pangkat 2 dari ${x} adalah ${Math.sqrt(x)}`;
    }
    
}

// Contoh penggunaan
console.log(hitungAkar(-4));
