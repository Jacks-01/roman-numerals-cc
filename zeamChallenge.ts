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

const RomanNumeralMap = new Map<string, number>()
RomanNumeralMap.set('I', 1)
RomanNumeralMap.set('V', 5)
RomanNumeralMap.set('X', 10)
RomanNumeralMap.set('L', 50)
RomanNumeralMap.set('C', 100)
RomanNumeralMap.set('D', 500)
RomanNumeralMap.set('M', 1000)

const calculateRomanNumerals = (inputString: string): any => {
    console.log('inputString String: ', inputString);

    for (let i = 0; i < inputString.length; i++) {
        console.log('numeral:', inputString.charAt(i));
    }

    return;
}

calculateRomanNumerals('MIX');

