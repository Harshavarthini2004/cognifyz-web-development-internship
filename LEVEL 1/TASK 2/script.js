function changeColor() {
    const button = document.getElementById("colorButton");
    const colors = ["#ff5c3a", "#3a9dff", "#3aff8c", "#ffdd3a"];
    const current = button.style.backgroundColor;
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    button.style.backgroundColor = randomColor;
}

function showGreeting() {
    const currentHour = new Date().getHours();
    let greeting;

    if (currentHour < 12) {
        greeting = "Good Morning! Ready for an early session?";
    } else if (currentHour < 18) {
        greeting = "Good Afternoon! Time to keep the momentum going.";
    } else {
        greeting = "Good Evening! Perfect time for a wind-down workout.";
    }

    alert(greeting);
}

function calculateSum() {
    const number1 = Number(document.getElementById("number1").value);
    const number2 = Number(document.getElementById("number2").value);
    const sum = number1 + number2;

    document.getElementById("result").textContent =
        "Total Calories Burned: " + sum;
}
