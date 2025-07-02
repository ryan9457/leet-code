/*
14. Longest Common Prefix(https://leetcode.com/problems/longest-common-prefix/)

Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".
*/

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    const [fstStr] = strs
    let result = ''
    outer: for (let strIndex = 0; strIndex < fstStr.length; strIndex++) {
        const fstStrChar = fstStr[strIndex]
        let char = fstStrChar
        for (let index = 1; index < strs.length; index++) {
            char = strs[index][strIndex]
            if (fstStrChar !== char) break outer
        }
        result += char
    }
    return result
}

const input = [['flower', 'flow', 'flight'], ['dog', 'racecar', 'car'], ['a']]
input.forEach((data) => {
    console.log(`input:${data} output:`, longestCommonPrefix(data), '\n')
})
