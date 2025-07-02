/*
3105. Longest Strictly Increasing or Strictly Decreasing Subarray(https://leetcode.com/problems/longest-strictly-increasing-or-strictly-decreasing-subarray/)

You are given an array of integers nums. Return the length of the longest subarray of nums which is either strictly increasing or strictly decreasing.
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var longestMonotonicSubarray = function (nums) {
    let increasing = 1;
    let decreasing = 1;
    let Max = 1;
    for (let i = 1; i < nums.length; i++) {
        // 遞增
      if (nums[i - 1] < nums[i]) {
        increasing++;
        if (Max < increasing) {
          Max = increasing;
        }
        if (decreasing > 1) {
          decreasing = 1;
        }
      }
        // 遞減
      if (nums[i - 1] > nums[i]) {
        decreasing++;
        if (Max < decreasing) {
          Max = decreasing;
        }
        if (increasing > 1) {
          increasing = 1;
        }
      }
      // 重複
      if (nums[i - 1] == nums[i]) {
        decreasing = 1;
        increasing = 1;
      }
    }
    return Max;
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
