const form = document.querySelector('.form')
let ErrorMassage = []


function subTotal(harga, barang) {
    const total = harga * barang;
    return total
}


function cekDiskon(subtotal) {
    let diskon

    if (subtotal >= 250000) {
        diskon = 25
    } else if (subTotal >= 200000) {
        diskon = 20
    } else if (subTotal >= 150000) {
        diskon = 15
    } else if (subTotal >= 100000) {
        diskon = 10
    } else if (subTotal >= 50000) {
        diskon = 5
    } else {
        diskon = 0
    }
    return diskon
}


function nilaiDiskon(harga, diskon) {
    return harga * (diskon / 100)
}


function jumlahPembayaran(total, nilaiDis) {
    return total - nilaiDis
}


function validation(kodebarang, harga, jumlah, nama) {
    if (kodebarang == '') {
        ErrorMassage.push('Kode Barang Harus Diisi!')
    } 

    if (harga == '') {
        ErrorMassage.push('Harga Tidak Boleh Nol!')
    } 

    if (jumlah == '') {
        ErrorMassage.push('Jumlah Barang Harus Diisi!')
    } 
    
    if (nama == '') {
        ErrorMassage.push('Nama Barang Harus Diisi!')
    }
}

const submit = document.getElementById('pay');
submit.addEventListener('click', () => {
    console.log("Submited");
    let kodebarang = document.getElementById('code').value;
    let harga = document.getElementById('price').value;
    let jumlahjual = document.getElementById('total').value;
    let namaBarang = document.getElementById('name').value;

    validation(kodebarang, harga, jumlahjual, namaBarang)


    if (ErrorMassage.length < 1) {
        const total = subTotal(harga, jumlahjual);
        const diskon = cekDiskon(total);
        const nilaiDis = nilaiDiskon(total, diskon);
        const totalBayar = jumlahPembayaran(total, nilaiDis);

        document.getElementById('subtotal').value = `Rp ${total},-`;
        document.getElementById('discount').value = `${diskon}%`;
        document.getElementById('total_discount').value = `Rp ${nilaiDis},-`;
        document.getElementById('total_price').value = `Rp ${totalBayar},-`;

    } else {
        alert(ErrorMassage.join('\n'))
        ErrorMassage = []
    }
})