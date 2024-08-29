# 1. Recibir la temperatura en grados Fahrenheit que necesita ser convertida
temperatura_fahrenheit = float(input("Ingrese la temperatura en grados Fahrenheit: "))

# 2. Aplicar la fórmula para convertir el dato ingresado a Celsius
temperatura_celsius = (temperatura_fahrenheit - 32) * (5/9)

# 3. Mostrar la temperatura convertida en grados Celsius
print(f"La temperatura en grados Celsius es: {temperatura_celsius}")