function hitungTotal() {
    // 1. Ambil data dari input menggunakan DOM
    let nama = document.getElementById('nama').value;
    let barang = document.getElementById('barang').value;
    let harga = parseFloat(document.getElementById('harga').value);
    let jumlah = parseInt(document.getElementById('jumlah').value);

    // Validasi sederhana jika form kosong
    if (!nama || !barang || isNaN(harga) || isNaN(jumlah)) {
        alert("Harap isi semua kolom dengan benar!");
        return;
    }

    // 2. Hitung subtotal
    let subtotal = harga * jumlah;
    let diskon = 0;

    // 3. Tentukan diskon menggunakan percabangan (if...else)
    if (subtotal >= 500000) {
        diskon = subtotal * 0.10; // Diskon 10%
    } else if (subtotal >= 250000) {
        diskon = subtotal * 0.05; // Diskon 5%
    } else {
        diskon = 0; // Tidak ada diskon
    }

    // 4. Hitung total pembayaran
    let totalBayar = subtotal - diskon;

    // Fungsi kecil untuk memformat angka menjadi format Rupiah
    const formatRupiah = (angka) => {
        return "Rp" + angka.toLocaleString('id-ID');
    };

    // 5. Tampilkan hasil ke halaman HTML
    document.getElementById('out-nama').textContent = nama;
    document.getElementById('out-barang').textContent = barang;
    document.getElementById('out-subtotal').textContent = formatRupiah(subtotal);
    document.getElementById('out-diskon').textContent = formatRupiah(diskon);
    document.getElementById('out-total').textContent = formatRupiah(totalBayar);

    // Munculkan kotak hasil yang awalnya disembunyikan (display: none)
    document.getElementById('hasil-output').style.display = 'block';
}