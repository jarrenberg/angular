function sumarNumerosSinDefinirNada() {
    return 2 + 5;
}

function sumarNumerosConTipos(a: number, b: number) {
    return a + b;
}

const sumarNumerosConFlecha = (a: number, b: number): string => {
    // return (a+b).toString();
    return `El resultado de sumar ${a} y ${b} es ${a + b}`;
};

function multiplicar(a: number, b: number, base?: number) { //primero parametros obligatorios, luego opcionales y por ultimo defaults
    return a*b;
}

const resultado1: number = sumarNumerosSinDefinirNada();
const resultado2: number = sumarNumerosConTipos(2, 3);
const resultado3: string = sumarNumerosConFlecha(4, 7);
const resultado4 : number = multiplicar(2,3);
console.log(resultado1);
console.log(resultado2);
console.log(resultado3);
console.log(resultado4);
export { };