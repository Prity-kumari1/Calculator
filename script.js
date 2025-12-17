const display = document.querySelector("input");
console.log(display);

const operators = ["+", "-", "*", "/"];


const buttons = document.querySelector(".buttons");
// console.log(buttons);

buttons.addEventListener("click", (e) => {
    const data = e.target.innerText;
    const lastChar = display.value.slice(-1);

    // agar button nahi hai to kuch mat karo
    if (e.target.tagName !== "BUTTON") return;

    // Clear
    if (data == "C") {
        display.value = "";
        return;
    }

    // equal
    if (data === "=") {
        try {
            display.value = eval(display.value);
        } catch (error) {
            display.value = "Error";
        }
        return;
    }

    // ❌ prevent two operators together
    if (operators.includes(data) && operators.includes(lastChar)) {
        // replace last operator
        display.value = display.value.slice(0, -1) + value;
        return;
    }

    // Numbers & operators

    display.value += data;
    console.log(e.target.innerText);

})