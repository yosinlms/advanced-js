// function tampilkanHasil() {
//   var tujuanElement = document.getElementById("tujuan");
//   var hasilElement = document.getElementById("hasil");

//   var tujuan = tujuanElement.value;
//   var hasil = kehidupan(tujuan);

//   hasilElement.textContent = "jika " + tujuan + "," + hasil;
// }

function tampilkanHasil() {
  var tujuanElement = document.getElementById("tujuan");
  var hasilElement = document.getElementById("hasil");

  var tujuan = tujuanElement.value;
  var hasil = kehidupan(tujuan);
  hasilElement.textContent = "jika " + tujuan + ", " + hasil;
}

function kehidupan(tujuan) {
  var apaYangTerjadi;
  switch (tujuan) {
    case "tidak belajar":
      apaYangTerjadi = "akan bodoh";
      break;

    case "belajar dengan giat":
      apaYangTerjadi = "akan sukses";
      break;

    default:
      apaYangTerjadi = "gatau";
      break;
  }
  return apaYangTerjadi;
}
