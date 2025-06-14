class Calculator {
    constructor(currentInput = 0, operator = '', previousInput = 0) {
        this.currentInput = currentInput;
        this.operator = operator;
        this.previousInput = previousInput;
    }

    appendNumber(number) {
        this.currentInput = number;
    }

    setOperator(operator) {
        this.operator = operator;
    }

    calculate() {
        switch (this.operator) {
            case '+':
                return this.previousInput + this.currentInput;
            case '-':
                return this.previousInput - this.currentInput;
            case '*':
                return this.previousInput * this.currentInput;
            case '/':
                if (this.currentInput === 0)
                    throw new Error('INDETERMINADO a/0.');
                return this.previousInput / this.currentInput;
            default:
                throw new Error("Operação inválida.");
        }
    }

    main(number1, operator, number2) {
        this.previousInput = number1;
        this.appendNumber(number2);
        this.setOperator(operator);
        const result = this.calculate();
        console.log(`Resultado: ${result}.`);
    }
}

/* Exp's:
const c = new Calculator();
c.main(15, "+", 22);
c.main(7, "-", 2);
c.main(15, "*", 15);
c.main(0, "/", 0); --- Envia erro. */
