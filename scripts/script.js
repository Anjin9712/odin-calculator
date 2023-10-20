const display = document.querySelector('#display');
const buttons = document.querySelectorAll('button');
let x = '';
let op = '';
let y = '';
let out = '';

function add(x, y) {
    return x + y
}

function subtract(x, y) {
    return x - y
}

function multiply(x, y) {
    return x * y
}

function divide(x, y) {
    return x / y
}

function operate(x, op, y) {
    switch (op) {
        case '+': {
            return add(x, y)
            break
        }
            
        case "-": {
            return subtract(x, y)
            break
        }      
            
        case "x": {
            return multiply(x, y)
            break
        }

        case "/": {
            return divide(x, y)
            break
        }

        default: {
            console.log('invalid operator')
        }
    }
}

buttons.forEach(element => {
    element.addEventListener(
        "click",
        event => {

            const button = event.target;

            if (x.length < 4 && button.className == "digit" && op === '' && out === '') {
                x = x.concat(button.value);
                display.textContent += button.value

            } else if (button.className == "operator" && op == '' && x.length > 0) {
                op = button.value;
                display.textContent += " " + op + " ";

            } else if (y.length < 4 && button.className == "digit" && op != '' && out == "") {
                y = y.concat(button.value)
                display.textContent += button.value

            } else if (button.className == 'equals' && out == '') {
                try {
                    out = operate(parseInt(x), op, parseInt(y));
                    display.textContent += " = " + operate(parseInt(x), op, parseInt(y))
                } catch(error) {
                    display.textContent = "nope"
                }
            } else if (button.className == 'clear') {
                x = '';
                y = '';
                op = '';
                out = '';
                display.textContent= ""
            }
        }
    )
});


