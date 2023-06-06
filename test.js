function pow(x, n) {
    let result = x**n
    return result;
}

let x = prompt("введите x");
let n = prompt("введите n");

if (n < 1) {
    alert('Неверная степень');
} else {
    alert( pow(x, n) );
}