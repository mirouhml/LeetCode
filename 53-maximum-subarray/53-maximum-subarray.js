/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let maxSum = -Infinity;
    let current = 0;
    for (let i=0;i<nums.length;i++) {
        current = max(nums[i], current + nums[i]);
        maxSum = max(maxSum,current);
    }
    return maxSum;
};
    
var max = function(num1,num2) {
    if (num1 > num2)
        return num1;
    else 
        return num2;
};