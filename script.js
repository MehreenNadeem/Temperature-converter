function convertTemperature() {
    const inputValue = parseFloat(document.getElementById("inputValue").value);
    const unit = document.getElementById("unit").value;
    let result;

    if (unit === "celsius") {
        result = (inputValue * 9/5) + 32;
    } else {
        result = (inputValue - 32) * 5/9;
    }

    document.getElementById("resultText").textContent = `${inputValue} ${unit === "celsius" ? "°C" : "°F"} is equal to ${result.toFixed(2)} ${unit === "celsius" ? "°F" : "°C"}`;
    document.getElementById("resultPopup").style.display = "block";
}

function closePopup() {
    document.getElementById("resultPopup").style.display = "none";
}




