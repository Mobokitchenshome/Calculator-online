document.addEventListener("DOMContentLoaded", function () {
    const calculator = document.getElementById("calculator");
    const totalEuro = document.getElementById("totalEuro");
    const totalLei = document.getElementById("totalLei");
    const exportPDFButton = document.getElementById("exportPDF");

    // Lista materialelor și accesoriilor
    const items = [
        { name: "Blat Egger (4100x600) PAL", price: 50 },
        { name: "Brâu Egger PAL", price: 30 },
        { name: "Carcasă Egger", price: 40 },
        { name: "Carcasă Krono", price: 35 },
        { name: "Front Egger", price: 60 },
        { name: "Front MDF vopsit", price: 80 },
        { name: "Balamale Blum", price: 10 },
        { name: "Sertar Blum Antaro", price: 20 },
        { name: "LED 1m", price: 15 }
    ];

    let selections = [];

    function renderCalculator() {
        calculator.innerHTML = "";

        items.forEach((item, index) => {
            const row = document.createElement("div");
            row.className = "calculator-row";

            const label = document.createElement("label");
            label.textContent = item.name;

            const input = document.createElement("input");
            input.type = "number";
            input.min = 0;
            input.value = 0;
            input.dataset.index = index;

            input.addEventListener("input", updateTotal);

            row.appendChild(label);
            row.appendChild(input);
            calculator.appendChild(row);

            selections.push({ name: item.name, quantity: 0, price: item.price });
        });
    }

    function updateTotal() {
        let total = 0;
        selections.forEach((item, index) => {
            const input = document.querySelector(`input[data-index="${index}"]`);
            const quantity = parseFloat(input.value) || 0;
            selections[index].quantity = quantity;
            total += quantity * item.price;
        });

        totalEuro.textContent = total.toFixed(2);
        totalLei.textContent = (total * 19).toFixed(2);
    }

    exportPDFButton.addEventListener("click", function () {
        const { jsPDF } = window.jspdf;
        const doc = new jsPDF();
        doc.text("Ofertă Mobilier", 10, 10);

        let y = 20;
        selections.forEach(item => {
            if (item.quantity > 0) {
                doc.text(`${item.name}: ${item.quantity} x ${item.price}€ = ${(item.quantity * item.price).toFixed(2)}€`, 10, y);
                y += 10;
            }
        });

        doc.text(`Total: ${totalEuro.textContent}€ / ${totalLei.textContent} MDL`, 10, y + 10);
        doc.save("oferta_mobilier.pdf");
    });

    renderCalculator();
});
