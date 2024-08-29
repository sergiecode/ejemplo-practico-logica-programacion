// 1. Recibir la temperatura en grados Fahrenheit que necesita ser convertida

const temperatura_fahrenheit = parseFloat(prompt("Favor ingresar la temperatura que se desea convertir: "));

// 2. Aplicar la fórmula para convertir el dato ingresado a Celsius
const temperatura_celsius = (temperatura_fahrenheit - 32) * (5/9);

// 3. Mostrar la temperatura convertida en grados Celsius
console.log(`La temperatura en grados Celsius es: ${temperatura_celsius}`);