// nullish coalescing operator

function multiplicacion(num1, num2) {
    ////num1 = (num1 == null ? 0 : num1);
    //num2 = (num2 == null ? 0 : num2);

    num1 = num1 ?? 1;  //! equivalente a la linea 4
    num2 = num2 ?? 1;

    return num1 * num2;
}

console.log(multiplicacion(5, 2));
console.log(multiplicacion(5));
