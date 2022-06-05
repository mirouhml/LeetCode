/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    let mid;
    while (right >= left) {
        mid = left + Math.floor((right - left) / 2);
        if (nums[mid] === target)
            return mid;
        else if (nums[mid] > target)
            right = mid - 1;
        else 
            left = mid + 1;
    }
    if (nums[mid] < target)
        mid += 1;
    return mid;
};