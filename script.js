// INDEX PAGE
if (document.getElementById("companySelect")) {
    const companySelect = document.getElementById("companySelect");

    for (let company in carData) {
        let option = document.createElement("option");
        option.value = company;
        option.text = company;
        companySelect.appendChild(option);
    }

    function goToModel() {
        const company = companySelect.value;
        if (!company) {
            alert("Please select a company");
            return;
        }
        localStorage.setItem("company", company);
        window.location.href = "model.html";
    }
}

// MODEL PAGE
if (document.getElementById("modelSelect")) {
    const company = localStorage.getItem("company");
    const modelSelect = document.getElementById("modelSelect");
    const models = carData[company];

    for (let model in models) {
        let option = document.createElement("option");
        option.value = model;
        option.text = model;
        modelSelect.appendChild(option);
    }

    function showCC() {
        const model = modelSelect.value;
        if (!model) {
            alert("Please select a model");
            return;
        }
        localStorage.setItem("model", model);
        localStorage.setItem("cc", models[model]);
        window.location.href = "result.html";
    }
}

// RESULT PAGE
if (document.getElementById("engineCC")) {
    document.getElementById("carName").innerText =
        localStorage.getItem("company") + " " +
        localStorage.getItem("model");

    document.getElementById("engineCC").innerText =
        localStorage.getItem("cc");
}

