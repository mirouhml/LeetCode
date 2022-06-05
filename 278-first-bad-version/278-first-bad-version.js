/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        if (n === 1 && isBadVersion(n))
            return n;
        let left = 1;
        let right = n;
        let mid;
        while (right >= left) {
            mid = left + Math.floor((right - left) / 2);
            if (isBadVersion(mid)){
                if (!isBadVersion(mid - 1))
                    return mid;
                right = mid - 1;
            }
            else 
                left = mid + 1;
        }
    };
};