/**
 * @param {number[]} nums
 * @return {boolean}
 */
function(nums) {
    let newArray = [...nums]
    const sortArray = nums.sort((a,b)=> a-b)
    for(let i = 0 ; i< nums.length ; i++) {
        const rest = newArray.slice(1)
        newArray = [...rest, newArray[0]]
        if(JSON.stringify(sortArray) === JSON.stringify(newArray)) {
            return true
        }
    }
    return false
};
