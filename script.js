function calculeaza() {
    let latime = parseFloat(document.getElementById("latime").value);
    let inaltime = parseFloat(document.getElementById("inaltime").value);
    let adancime = parseFloat(document.getElementById("adancime").value);
    let material = document.getElementById("material").value;
    
    if (isNaN(latime) || isNaN(inaltime) || isNaN(adancime) || latime <= 0 || inaltime <= 0 || adancime <= 0) {
        document.getElementById("rezultat").innerText = "Introdu dimensiunile corecte!";
        return;
    }

    let pret_pe_metru = {
        "PAL": 51,
        "MDF": 190,
        "Lemn": 300
    };

    if (!pret_pe_metru[material]) {
        document.getElementById("rezultat").innerText = "Selectează un material valid!";
        return;
    }

    let suprafata = 2 * (latime * inaltime + latime * adancime + inaltime * adancime) / 10000;
    let pret_final = suprafata * pret_pe_metru[material];

    document.getElementById("rezultat").innerText = "Preț estimativ: " + pret_final.toFixed(2) + " €";
}
