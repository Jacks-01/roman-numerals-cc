// Roman Numeral Challenge
/**
 * I - 1
 * V - 5
 * X - 10
 * L - 50
 * C - 100
 * D - 500
 * M - 1000
 *
 * Roman numerals are additive, except when a lower value symbol appears before a higher value symbol.
 * In that case, it is called subtractive notation and is considered a reduction of that value.
 *
 * Examples:
 * LX = 50 + 10 = 60
 * XL = (-)10 + 50 = 40
 *
 * Write a program that accepts a Roman numeral string and prints out the decimal equivalent.
 *
 */

const RomanNumeralMap = new Map<string, number>();
RomanNumeralMap.set('I', 1);
RomanNumeralMap.set('V', 5);
RomanNumeralMap.set('X', 10);
RomanNumeralMap.set('L', 50);
RomanNumeralMap.set('C', 100);
RomanNumeralMap.set('D', 500);
RomanNumeralMap.set('M', 1000);

//TODO: 1 - Create the Map with each Roman numeral value.
//TODO: 2 - Iterate through the input string.
//TODO: 3 - Look up each value in the input string and return the total.
//TODO: 4 - Check to see if the current pointer is less than the next one.
//TODO:    4.1 - If yes, then multiply the current pointer by -1.
//TODO: 5 - Add both values, then update the total.
//TODO: 6 - Repeat.

const testInputArray: Array<string> = [
	'XXXIX', // 39
	'CCXLVI', // 246
	'DCCLXXXIX', // 789
	'MMCDXXI', // 2421
];

const calculateRomanNumerals = (inputString: string): number | string => {
	console.log('inputString String: ', inputString);

	let total: number = 0;

	for (let i = 0; i < inputString.length; i++) {
		let currentNumeral = RomanNumeralMap.get(inputString.charAt(i));
		let nextNumeral = RomanNumeralMap.get(inputString.charAt(i + 1));

		// console.log(`current: ${currentNumeral} (${inputString.charAt(i)})`);
		// console.log(`next: ${nextNumeral} (${inputString.charAt(i + 1)})`);

		// if input isn't a numeral
        if (currentNumeral === undefined) { return 'Not a valid roman numeral' }
        // the current numeral the same or bigger than the next
        if (nextNumeral === undefined || currentNumeral >= nextNumeral) { total += currentNumeral }
        // the current numeral is smaller than the next 
        else { total -= currentNumeral }
	}
	console.log(total);
	return total;
};

testInputArray.forEach((string) => {
	calculateRomanNumerals(string);
});
