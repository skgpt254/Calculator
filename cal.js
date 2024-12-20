
    function appendToDisplay(value) {
        const display = document.getElementById('display');
        display.value += value;
    }

    function clearDisplay() {
        document.getElementById('display').value = '';
    }

    function backspace() {
        const display = document.getElementById('display');
        display.value = display.value.slice(0, -1);
    }

    function calculate() {
        try {
            const display = document.getElementById('display');
            let expression = display.value;
        
            expression = expression.replace(/\^/g, '');
            // Evaluate the expression
            const result = eval(expression);
            display.value = result;
        } catch (error) {
            document.getElementById('display').value = 'Error';
        }
    }