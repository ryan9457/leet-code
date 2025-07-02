/*
13. Roman to Integer(https://leetcode.com/problems/roman-to-integer/description/)

Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000
For example, 2 is written as II in Roman numeral, just two ones added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

I can be placed before V (5) and X (10) to make 4 and 9. 
X can be placed before L (50) and C (100) to make 40 and 90. 
C can be placed before D (500) and M (1000) to make 400 and 900.
Given a roman numeral, convert it to an integer.
*/

const contrast = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
}

const keys = Object.keys(contrast)

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
    const array = []
    let prevChar = null
    for (let index = 0; index < s.length; index++) {
        const char = s[index]
        let minusNum = 0
        let num = contrast[char]
        if (`${prevChar}${char}`.match(/IV|IX|XL|XC|CD|CM/)) {
            let gap = keys.indexOf(char) - keys.indexOf(prevChar)
            minusNum = contrast[prevChar]
            num = minusNum * (gap > 1 ? 9 : 4) // 倍數剛好是前一個字元(I/X/C)
            array[array.length - 1] -= minusNum
        }
        if (prevChar && char === prevChar) array[array.length - 1] += num
        else array.push(num)
        prevChar = char
    }
    return array.reduce((sum, value) => sum + value, 0)
}

const input = ['IV', 'IX', 'III', 'LVIII', 'MCMXCIV']
input.forEach((data) => {
    console.log(`input:${data} output:`, romanToInt(data), '\n')
})
