//Se solicita por pantall al usuario ingresar un número
const num_usuario = +prompt('Ingresa un número: ');

//se declara let multi vacío
let multi = '';

//Funcion evaluar si el númeror es mayor a 20, arroje mensaje por consol
const evaluar = () => {
    if (num_usuario > 20) {
        console.log('fuera de rango');
    } else {
        contador = 1;
        for (i = 1; i <= num_usuario; i++) {
            multi = console.log(`${num_usuario} x ${contador++} =  ${num_usuario*i}`);
        }
        //se llama a la función factorial
        factorial();
    };
};

//Se declara funcion pare evaluar factorial
let factorial = () => {
    let factor = num_usuario;
    n = 1;
    contador = 0;
    for (let i = 1; i <= factor; i++) {
        n = n * i;
        contador++;
        console.log(`Factorial de ${contador} es: ${n}`);
    }
    return n;
}

evaluar();