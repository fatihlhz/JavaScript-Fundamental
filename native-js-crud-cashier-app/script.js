let ErrorMessage = [];

var data = [
    "Silverqueen",
    "Kecap",
    "Batrai",
    "Apel"
];

var harga = [
    15000,
    7000,
    3000,
    2000
];


function tampil() {
    var tabel = document.getElementById("tabel");
    tabel.innerHTML = "<tr><th>No</th><th>Barang</th><th>Harga</th><th width= '10%'>Jumlah</th><th width= '30%'>Action</th></tr>";
    for (let i = 0; i < data.length; i++) {
        var btnEdit = "<button class='btn-edit' href='#' onclick='edit(" + i + ")'>Edit Barang</button>";
        var btnEditPrice = "<button class='btn-editPrice' href='#' onclick='editPrice(" + i + ")'>Edit Harga</button>";
        var btnHapus = "<button class='btn-hapus' href='#' onclick='hapus(" + i + ")'>Hapus</button>";
        var jumlah = `<input type='text' class='form-jumlah' id='price${i}' />`
        j = i + 1;
        tabel.innerHTML += "<tr><td>" + j + "</td><td>" + data[i] + "</td><td>" + harga[i] + "</td><td>"+ jumlah +"</td><td>" + btnEdit + "   " + btnEditPrice + "   " + btnHapus + "</tr>";
    }
}

function tambah() {
    var inputBarang = document.querySelector("input[name=barang]").value;
    var inputHarga = document.querySelector("input[name=harga]").value;
    if (inputBarang == "" || inputHarga == "") {
        alert("Mohon Lengkapi Data yang Hendak di Input")
    } else {
        data.push(inputBarang);
        harga.push(inputHarga);
        tampil();
        inputBarang.value = "";
        inputHarga.value = "";
    }
    
}

function edit(id) {
    var baru = prompt("Edit", data[id]);
    data[id] = baru;
    tampil();
}

function editPrice(id) {
    var baru = prompt("Edit", harga[id]);
    harga[id] = baru;
    tampil();
}

function hapus(id) {
    data.pop(id);
    tampil();
}

function proses() {
    let hargaSatu;
    let jumlah;
    let jumlahBarang = 0;
    let total = 0
    for(let i = 0; i < data.length; i++) {
        hargaSatu = Number(harga[i]);
        jumlah = Number(document.getElementById(`price${i}`).value);
        jumlahBarang += jumlah;
        total += hargaSatu * jumlah;
    }
    document.getElementById('jml-barang').value = `${jumlahBarang} Barang`;
    document.getElementById('tot-harga').value = `Rp${total},-`;
}

tampil();