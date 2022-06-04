/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let right = nums.length - 1;
    let left = 0;
    let mid = 0;
    while (right >= left) {
        mid = left + Math.floor((right - left) / 2);
        if (nums[mid] == target)
            return mid;
        else if (nums[mid] > target)
            right = mid - 1;
        else
            left = mid + 1;
    }
    
    return -1;
};