/*
3330. Find the Original Typed String I(3330. Find the Original Typed String I)

Alice is attempting to type a specific string on her computer. However, she tends to be clumsy and may press a key for too long, resulting in a character being typed multiple times.

Although Alice tried to focus on her typing, she is aware that she may still have done this at most once.

You are given a string word, which represents the final output displayed on Alice's screen.

Return the total number of possible original strings that Alice might have intended to type.
*/

/**
 * @param {string} word
 * @return {number}
 */
var possibleStringCount = function (word) {
    let temp = ''
    let combination = 1 // 本身就是一個組合
    for (let index = word.length - 1; index >= 0; index--) {
        let char = word[index]
        // 代表連續按同一個按鍵
        if (temp === char) combination++
        temp = char
    }
    return combination
}

const input = ['abbcccc', 'abcd', 'aaaa']
input.forEach((data) => {
    console.log(`input:${data} output:`, possibleStringCount(data), '\n')
})
