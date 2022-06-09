/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    let squares = []
    nums.forEach(ele => squares.push(Math.pow(ele, 2)));
    return squares.sort((a, b) => a - b);
};