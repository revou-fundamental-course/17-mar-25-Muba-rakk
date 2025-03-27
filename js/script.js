document.addEventListener("DOMContentLoaded", function () {
    const btnSegitiga = document.getElementById("btn-segitiga");
    const btnPersegi = document.getElementById("btn-persegi");
    const btnLingkaran = document.getElementById("btn-lingkaran");

    const options = document.getElementById("options");
    const btnLuas = document.getElementById("btn-luas");
    const btnKeliling = document.getElementById("btn-keliling");

    const inputContainer = document.getElementById("input-container");
    const title = document.getElementById("title");
    const shapeImage = document.getElementById("shape-image");
    const inputsDiv = document.getElementById("input");
    const calculateBtn = document.getElementById("calculate");
    const result = document.getElementById("result");

    let selectedShape = "";

    btnSegitiga.addEventListener("click", function () {
        selectedShape = "segitiga";
        options.style.display = "block";
    });

    btnPersegi.addEventListener("click", function () {
        selectedShape = "persegi";
        options.style.display = "block";
    });

    btnLingkaran.addEventListener("click", function () {
        selectedShape = "lingkaran";
        options.style.display = "block";
    });

    btnLuas.addEventListener("click", function () {
        showInputs("luas");
    });

    btnKeliling.addEventListener("click", function () {
        showInputs("keliling");
    });

    function showInputs(type) {
        inputContainer.style.display = "block";
        inputsDiv.innerHTML = "";
        result.textContent = "";

        if (selectedShape === "segitiga") {
            title.textContent = type === "luas" ? "Hitung Luas Segitiga" : "Hitung Keliling Segitiga";
            shapeImage.src = "/assets/triangle.png";

            if (type === "luas") {
                inputsDiv.innerHTML = `
                    <label>Alas: <input type="number" id="alas"></label>
                    <label>Tinggi: <input type="number" id="tinggi"></label>
                `;
            } else {
                inputsDiv.innerHTML = `
                    <label>Sisi 1: <input type="number" id="sisi1"></label>
                    <label>Sisi 2: <input type="number" id="sisi2"></label>
                    <label>Sisi 3: <input type="number" id="sisi3"></label>
                `;
            }
        } else if (selectedShape === "persegi") {
            title.textContent = type === "luas" ? "Hitung Luas Persegi" : "Hitung Keliling Persegi";
            shapeImage.src = "/assets/rectangle.png";

            inputsDiv.innerHTML = `
                <label>Sisi: <input type="number" id="sisi"></label>
            `;
        } else if (selectedShape === "lingkaran") {
            title.textContent = type === "luas" ? "Hitung Luas Lingkaran" : "Hitung Keliling Lingkaran";
            shapeImage.src = "/assets/circle.png";

            inputsDiv.innerHTML = `
                <label>Jari-jari: <input type="number" id="radius"></label>
            `;
        }

        calculateBtn.onclick = function () {
            calculate(type);
        };
    }

    function calculate(type) {
        if (selectedShape === "segitiga") {
            if (type === "luas") {
                let alas = parseFloat(document.getElementById("alas").value);
                let tinggi = parseFloat(document.getElementById("tinggi").value);
                if (isNaN(alas) || isNaN(tinggi)) {
                    result.textContent = "Masukkan angka yang valid!";
                    return;
                }
                result.textContent = `Luas: ${(0.5 * alas * tinggi).toFixed(2)}`;
            } else {
                let sisi1 = parseFloat(document.getElementById("sisi1").value);
                let sisi2 = parseFloat(document.getElementById("sisi2").value);
                let sisi3 = parseFloat(document.getElementById("sisi3").value);
                if (isNaN(sisi1) || isNaN(sisi2) || isNaN(sisi3)) {
                    result.textContent = "Masukkan angka yang valid!";
                    return;
                }
                result.textContent = `Keliling: ${(sisi1 + sisi2 + sisi3).toFixed(2)}`;
            }
        } else if (selectedShape === "persegi") {
            let sisi = parseFloat(document.getElementById("sisi").value);
            if (isNaN(sisi)) {
                result.textContent = "Masukkan angka yang valid!";
                return;
            }
            result.textContent = type === "luas"
                ? `Luas: ${(sisi * sisi).toFixed(2)}`
                : `Keliling: ${(4 * sisi).toFixed(2)}`;
        } else if (selectedShape === "lingkaran") {
            let radius = parseFloat(document.getElementById("radius").value);
            if (isNaN(radius)) {
                result.textContent = "Masukkan angka yang valid!";
                return;
            }
            result.textContent = type === "luas"
                ? `Luas: ${(Math.PI * radius * radius).toFixed(2)}`
                : `Keliling: ${(2 * Math.PI * radius).toFixed(2)}`;
        }
    }
});
