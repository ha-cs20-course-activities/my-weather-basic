// My Weather

// DOM Elements
let weekEl = document.getElementById('week-weather');
let celsBtn = document.getElementById('cels');
let fahrBtn = document.getElementById('fahr');

// Initialize Weather Data
let temps = [15, 20, 30, 18, 12, 25, 20];
let currentUnit = "C";

for (let i = 0; i < temps.length; i++) {
    weekEl.innerHTML += "<p>" + temps[i].toFixed(1) + "&deg;C</p>";
}

// Add Event Listeners
celsBtn.addEventListener('click', convertToCels);
fahrBtn.addEventListener('click', convertToFahr);

// Event Functions
function convertToFahr() {
    if (currentUnit == "C") {
        convert(celsToFahr, "F");
        currentUnit = "F";
        celsBtn.classList.remove('active');
        fahrBtn.classList.add('active');
    }
    
}

function convertToCels() {
    if (currentUnit == "F") {
        convert(fahrToCels, "C");
        currentUnit = "C";
        fahrBtn.classList.remove('active');
        celsBtn.classList.add('active');
    }
}

// Helper Functions
function convert(convertFunc, unit) {
    // Convert & Display Temperatures
    weekEl.innerHTML = ""; // Clear html display
    for (let i = 0; i < temps.length; i++) {
        temps[i] = convertFunc(temps[i]); // Convert Temp
        weekEl.innerHTML += "<p>" + temps[i].toFixed(1) + "&deg;" + unit + "</p>"; // Display
    }
}

function fahrToCels(fahrTemp) {
    return (fahrTemp - 32) * 5 / 9;
}

function celsToFahr(celsTemp) {
    return celsTemp * 9 / 5 + 32;
}