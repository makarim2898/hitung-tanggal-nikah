document.getElementById('primbonForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const nama1 = document.getElementById('nama1').value;
    const tanggalLahir1 = document.getElementById('tanggalLahir1').value;
    const nama2 = document.getElementById('nama2').value;
    const tanggalLahir2 = document.getElementById('tanggalLahir2').value;
    
    const hariJawa = ["Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu", "Minggu"];
    const pasaranJawa = ["Legi", "Pahing", "Pon", "Wage", "Kliwon"];
    
    const wetonDescriptions = {
        "Senin Legi": "Pasangan ini memiliki karakter yang rajin dan tekun. Mereka cenderung bekerja keras dan memiliki tujuan yang jelas dalam hidup.",
        "Selasa Pahing": "Pasangan ini memiliki karakter yang kuat dan pemberani. Mereka mampu menghadapi tantangan dalam pernikahan dengan baik.",
        // Tambahkan deskripsi lainnya untuk kombinasi weton lainnya
    };
    
    function hitungWeton(tanggalLahir) {
        const date = new Date(tanggalLahir);
        const hariLahir = hariJawa[date.getDay()];
        const pasaranIndex = Math.floor((date.getTime() / (1000 * 60 * 60 * 24)) % 5);
        const pasaranLahir = pasaranJawa[pasaranIndex];
        return [hariLahir, pasaranLahir];
    }
    
    function deskripsiWeton(hari, pasaran) {
        const weton = `${hari} ${pasaran}`;
        return wetonDescriptions[weton] || "Deskripsi untuk weton ini belum tersedia.";
    }
    
    const [hari1, pasaran1] = hitungWeton(tanggalLahir1);
    const [hari2, pasaran2] = hitungWeton(tanggalLahir2);
    
    const deskripsi1 = deskripsiWeton(hari1, pasaran1);
    const deskripsi2 = deskripsiWeton(hari2, pasaran2);
    
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `
        <h3>Hasil Primbon Pernikahan</h3>
        <p>Nama: ${nama1}<br>Tanggal Lahir: ${tanggalLahir1}<br>Weton: ${hari1} ${pasaran1}<br>Deskripsi: ${deskripsi1}</p>
        <p>Nama: ${nama2}<br>Tanggal Lahir: ${tanggalLahir2}<br>Weton: ${hari2} ${pasaran2}<br>Deskripsi: ${deskripsi2}</p>
    `;
});
