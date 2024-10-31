document.getElementById("drink").addEventListener("change", function() {
    document.getElementById("drinkMessage").innerText = `Ви обрали: ${this.value}`;
});

const daysMap = {
    "понеділок": "Це робочий день",
    "вівторок": "Це робочий день",
    "середа": "Це робочий день",
    "четвер": "Це робочий день",
    "п'ятниця": "Це робочий день",
    "субота": "Це вихідний",
    "неділя": "Це вихідний"
};

function checkDay() {
    const day = document.getElementById("day").value.toLowerCase();
    console.log()
}
// const day1 = "понеділок";
// const day2 = "вівторок";
// const day3 = "середа";
// const day4 = "четвер";
// const day5 = "п'ятниця";
// const day6 = "субота";
// const day7 = "неділя";
// switch 

// Перевірка пори року
const seasonMap = {
    1: "Зима", 2: "Зима", 12: "Зима",
    3: "Весна", 4: "Весна", 5: "Весна",
    6: "Літо", 7: "Літо", 8: "Літо",
    9: "Осінь", 10: "Осінь", 11: "Осінь"
};

function checkSeason() {
    const month = parseInt(document.getElementById("monthInput").value);
    document.getElementById("seasonMessage").innerText = seasonMap[month] || "Невірний номер місяця";
}

// Виведення кількості днів у місяці
const daysInMonthMap = {
    1: 31, 2: 28, 3: 31, 4: 30, 5: 31, 6: 30,
    7: 31, 8: 31, 9: 30, 10: 31, 11: 30, 12: 31
};

function checkDaysInMonth() {
    const month = parseInt(document.getElementById("daysInMonthInput").value);
    document.getElementById("daysInMonthMessage").innerText = daysInMonthMap[month] || "Невірний номер місяця";
}

// Виведення дії за кольором
const colorActions = {
    "червоний": "Стоп",
    "зелений": "Йти",
    "жовтий": "Чекати"
};

function checkColor() {
    const color = document.getElementById("colorInput").value.toLowerCase();
    document.getElementById("colorMessage").innerText = colorActions[color] || "Невірний колір";
}

// Калькулятор
const operationsMap = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
    "*": (a, b) => a * b,
    "/": (a, b) => b === 0 ? "Ділення на нуль неможливе!" : a / b
};

function calculate() {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    const operation = document.getElementById("operation").value;
    const result = operationsMap[operation](num1, num2);
    document.getElementById("calcMessage").innerText = `Результат: ${result}`;
}