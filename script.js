function calculeazaTotal() {
    // Inițializează totalul
    let total = 0;

    // Adaugă aici logica pentru a calcula totalul pe baza valorilor introduse în câmpurile formularului
    // Exemplu pentru Blaturi compact 12mm
    let pretBlatFundermax = parseFloat(document.getElementById("blat_fundermax").value) || 0;
    let cantitateBlatFundermax = parseFloat(document.getElementById("cant_blat_fundermax").value) || 0;
    total += pretBlatFundermax * cantitateBlatFundermax;

    let pretBlatSmart = parseFloat(document.getElementById("blat_smart").value) || 0;
    let cantitateBlatSmart = parseFloat(document.getElementById("cant_blat_smart").value) || 0;
    total += pretBlatSmart * cantitateBlatSmart;

    // Continuă cu restul câmpurilor în mod similar

    // Adaugă coeficienți
    let coeficientMontatori = parseFloat(document.getElementById("coeficient_montatori").value) || 1;
    let coeficientComplicare = parseFloat(document.getElementById("coeficient_complicare").value) || 1;
    total *= coeficientMontatori * coeficientComplicare;

    // Adaugă TVA
    let tva = parseFloat(document.getElementById("tva").value) || 0;
    let totalCuTva = total * (1 + tva / 100);

    // Afișează totalul în Euro și Lei
    document.getElementById("total_euro").value = totalCuTva.toFixed(2);
    document.getElementById("total_lei").value = (totalCuTva * 19).toFixed(2);
}
