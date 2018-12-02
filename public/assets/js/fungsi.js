
// // var hasil = document.getElementById("hasil");
// var tombol = document.getElementById("tipe");

// tombol.addEventListener("click", hitung);

function hitung(tombol){
    var angka1 = parseInt(document.getElementById("angka1").value); 
    var angka2 = parseInt(document.getElementById("angka2").value);
    if (tombol == "+") {
        hasil = angka1+angka2;
    }else if(tombol == "-"){
        hasil = angka1-angka2;
    }else if(tombol == "*"){
        hasil = angka1*angka2;
    }else if(tombol == "/"){
        hasil = angka1/angka2;
    }
    // hasil= angka1+angka2;
    document.getElementById("hasil").value=hasil;
    // console.log(tombol);
    // document.getElementById("hasil").value=hasil;
}

