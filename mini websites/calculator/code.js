
let inputBox = document.getElementById("number_area")
inputBox.readOnly = true
inputBox.value = 0

function clearInput() {
    inputBox.value = 0
    result1 = 0.0
}

function changeSign() {

    if (inputBox.value < 0) inputBox.value = Math.abs(inputBox.value)
    else if (inputBox.value > 0) inputBox.value = -inputBox.value
}

function percent() {

    inputBox.value = inputBox.value / 100
}

// numbers
let buttons = document.getElementsByTagName("button")

for (let i = 0; i < buttons.length - 1; i++) {
    buttons[i].addEventListener("click", function (e) {

        console.log(e.target)
        if (e.target.className === "one") {

            inputBox.value = parseFloat((inputBox.value.toString() + "1"))

        }
        else if (e.target.className === "two") {
            inputBox.value = parseFloat((inputBox.value.toString() + "2"))

        }
        else if (e.target.className === "three") {
            inputBox.value = parseFloat((inputBox.value.toString() + "3"))

        }
        else if (e.target.className === "four") {
            inputBox.value = parseFloat((inputBox.value.toString() + "4"))

        }
        else if (e.target.className === "five") {
            inputBox.value = parseFloat((inputBox.value.toString() + "5"))

        }
        else if (e.target.className === "six") {
            inputBox.value = parseFloat((inputBox.value.toString() + "6"))

        }
        else if (e.target.className === "seven") {
            inputBox.value = parseFloat((inputBox.value.toString() + "7"))

        }
        else if (e.target.className === "eight") {
            inputBox.value = parseFloat((inputBox.value.toString() + "8"))

        }
        else if (e.target.className === "nine") {
            inputBox.value = parseFloat((inputBox.value.toString() + "9"))

        }
        else if (e.target.className === "zero") {
            if (inputBox.value != "0") {
                inputBox.value = inputBox.value.toString() + "0"

            }

        }
        else if (e.target.className === "dot") {

            if (!(inputBox.value.toString().includes('.'))) {
                inputBox.value = inputBox.value.toString() + "."
            }
        }
    })

}
// operators click event listeners
let operators = document.getElementsByClassName("operator__buttons")

let result1 = 0.0
let result2 = 0.0
let selectedOperator = ""

for (let i = 0; i < operators.length; i++) {
    operators[i].addEventListener("click", function (e) {


        if (e.target.className === "operator__buttons divide") {

            selectedOperator = "/"
            result1 = parseFloat(inputBox.value)
            inputBox.value = 0
        }
        else if (e.target.className === "operator__buttons multiply") {
            selectedOperator = "*"
            result1 = parseFloat(inputBox.value)
            inputBox.value = 0

        }
        else if (e.target.className === "operator__buttons minus") {

            selectedOperator = "-"
            result1 = parseFloat(inputBox.value)
            inputBox.value = 0
        }
        else if (e.target.className === "operator__buttons plus") {

            selectedOperator = "+"
            result1 = parseFloat(inputBox.value)
            inputBox.value = 0

        }
        else if (e.target.className === "operator__buttons equal") {

            // get second input
            result2 = parseFloat(inputBox.value)
            if (selectedOperator === "+") {
                inputBox.value = (result1 + parseFloat(inputBox.value))

            }
            else if (selectedOperator === "-") {
                inputBox.value = (result1 - parseFloat(inputBox.value))
            }
            else if (selectedOperator === "*") {
                inputBox.value = (result1 * parseFloat(inputBox.value))
            }
            else if (selectedOperator === "/") {
                inputBox.value = (result1 / parseFloat(inputBox.value))
            }

            setTimeout(() => {

                let date = new Date()
                localStorage.history = "Date: " +
                    date.getDay() + "/" + date.getMonth() + "/" + date.getFullYear() + "\n" +
                    result1.toFixed(4) + " " + selectedOperator + " " + result2.toFixed(4) + " = " + parseFloat(inputBox.value).toFixed(4) + "\n" + "-----------------\n" +
                    localStorage.history;

                historyContainer.innerText = localStorage.history

            }, 2000);

        }


    })
}

// mouse events for style
//  operators
for (let i = 0; i < operators.length; i++) {

    operators[i].addEventListener("mouseover", (e) => {
        operators[i].style.backgroundColor = "#fba860"
    })
    operators[i].addEventListener("mouseleave", (e) => {
        operators[i].style.backgroundColor = "#f69a30"
    })
}

// special buttons
let specialButtons = document.getElementsByClassName("special__buttons")

for (let i = 0; i < specialButtons.length; i++) {

    specialButtons[i].addEventListener("mousedown", (e) => {

        specialButtons[i].style.backgroundColor = "white"
    })
    specialButtons[i].addEventListener("mouseup", (e) => {

        specialButtons[i].style.backgroundColor = "#a1a1a1"
    })
}


// history container code
let history = document.getElementsByClassName("history")[0]
history.style.height = "fit-content"


let historyContainer = document.getElementsByClassName("history__container")[0]

historyContainer.style.display = "none"

function toggleHistory() {
    if (historyContainer.style.display == "none") {

        document.getElementsByClassName("button__history")[0].innerHTML = "Hide History"
        history.style.height = "inherit"
        historyContainer.style.display = "block"

    }
    else {
        document.getElementsByClassName("button__history")[0].innerHTML = "Show History"
        history.style.height = "fit-content"
        historyContainer.style.display = "none"
    }

    historyContainer.innerText = localStorage.history

}


function clearHistory() {

    localStorage.history = ""
    historyContainer.innerHTML = ""

}

