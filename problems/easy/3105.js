/*
3105. Longest Strictly Increasing or Strictly Decreasing Subarray(https://leetcode.com/problems/longest-strictly-increasing-or-strictly-decreasing-subarray/)

You are given an array of integers nums. Return the length of the longest subarray of nums which is either strictly increasing or strictly decreasing.
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var longestMonotonicSubarray = function (nums) {
    let array2D = []
    let increases = []
    let decreases = []
    let previousValue = null
    for (let index = 0; index < nums.length; index++) {
        const element = nums[index]
        if (previousValue) {
            if (element > previousValue) {
                increases = [...increases, element]
                array2D.push(increases)
                decreases = []
            } else if (element < previousValue) {
                decreases = [...decreases, element]
                array2D.push(decreases)
                increases = []
            } else {
                increases = []
                decreases = []
            }
        }
        previousValue = element
    }
    return array2D.reduce((max, array) => Math.max(max, array.length), 0) + 1 // 加回第一個值
}

const input = [
    [1, 4, 3, 3, 2],
    [3, 3, 3, 3],
    [3, 2, 1],
    [1, 3],
]
input.forEach((data) => {
    console.log(`input:${data} output:`, longestMonotonicSubarray(data), '\n')
})
