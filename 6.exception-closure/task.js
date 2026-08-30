// Задача 1. Форматтер чисел
function parseCount(value) {
	const parsed = Number.parseFloat(value);
	if (Number.isNaN(parsed)) {
		throw new Error("Невалидное значение");
	}
	return parsed;
}

function validateCount(value) {
	try {
		return parseCount(value);
	} catch (error) {
		return error; // возвращаем объект ошибки
	}
}

// Задача 2. Треугольник
class Triangle {
	constructor(a, b, c) {
		// Проверка существования треугольника
		if (a + b <= c || a + c <= b || b + c <= a) {
			throw new Error("Треугольник с такими сторонами не существует");
		}
		this.a = a;
		this.b = b;
		this.c = c;
	}

	get perimeter() {
		return this.a + this.b + this.c;
	}

	get area() {
		const p = this.perimeter / 2;
		const area = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));
		// Округление до трёх знаков после запятой
		return Math.round(area * 1000) / 1000;
	}
}

function getTriangle(a, b, c) {
	try {
		return new Triangle(a, b, c);
	} catch (error) {
		// Возвращаем объект с геттерами, которые всегда возвращают сообщение об ошибке
		return {
			get area() {
				return "Ошибка! Треугольник не существует";
			},
			get perimeter() {
				return "Ошибка! Треугольник не существует";
			}
		};
	}
}