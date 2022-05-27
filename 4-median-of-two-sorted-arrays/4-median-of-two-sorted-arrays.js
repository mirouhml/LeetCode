/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let array = [...nums1, ...nums2].sort((a,b) => a - b)
    let median = 0
    let index = Math.ceil(array.length/2) - 1
    return array.length % 2 === 0 ? (array[index] + array[index+1])/2 : array[index]
};