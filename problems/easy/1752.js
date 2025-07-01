/*
1752. Check if Array Is Sorted and Rotated(https://leetcode.com/problems/check-if-array-is-sorted-and-rotated/)

Given an array nums, return true if the array was originally sorted in non-decreasing order, then rotated some number of positions (including zero). Otherwise, return false.

There may be duplicates in the original array.

Note: An array A rotated by x positions results in an array B of the same length such that B[i] == A[(i+x) % A.length] for every valid index i.
*/

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var check = function (nums) {
    let previousValue = null
    let rotatedIndex = 0
    for (let index = 0; index < nums.length; index++) {
        const element = nums[index]
        if (previousValue) {
            if (element < previousValue) {
                if (rotatedIndex !== 0) return false
                rotatedIndex = index
            }
            if (rotatedIndex !== 0 && element > nums[0]) return false
        }
        previousValue = element
    }
    return true
}

const input = [
    [3, 4, 5, 1, 2],
    [2, 1, 3, 4],
    [1, 2, 3],
    [1, 3, 2],
]
input.forEach((data) => {
    console.log(`input:${data} output:`, check(data), '\n')
})
