"use strict";

function solveEquation(a, b, c) {
	const d = b ** 2 - 4 * a * c;
	if (d < 0) {
		return [];
	} else if (d === 0) {
		return [-b / (2 * a)];
	} else {
		const sqrtD = Math.sqrt(d);
		return [
			(-b + sqrtD) / (2 * a),
			(-b - sqrtD) / (2 * a)
		];
	}
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
	// Проверяем, что все аргументы могут быть преобразованы в числа
	const args = [percent, contribution, amount, countMonths];
	for (let arg of args) {
		if (typeof arg === 'string') {
			if (isNaN(Number(arg))) {
				return false;
			}
		} else if (typeof arg !== 'number') {
			return false;
		}
	}

	// Приводим к числовому типу
	const p = Number(percent);
	const c = Number(contribution);
	const a = Number(amount);
	const n = Number(countMonths);

	// Тело кредита
	const S = a - c;
	if (S <= 0) {
		return 0;
	}

	// Месячная процентная ставка (доля от 0 до 1)
	const P = p / 100 / 12;

	// Ежемесячный платёж по формуле аннуитета
	const payment = S * (P + (P / (Math.pow(1 + P, n) - 1)));

	// Общая сумма всех платежей
	const total = payment * n;

	// Округление до двух знаков после запятой
	return Math.round(total * 100) / 100;
}