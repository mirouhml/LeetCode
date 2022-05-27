/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    let max_length = 0
    let start = 0
    const expandFromCenter = (s,l,r) => {
        while (l>-1 && r<s.length && s[l] === s[r]){
            l -= 1
            r += 1
        }
        
        if (max_length < r-l-1) {
            max_length = r-l-1
            start = l+1
        }
    }
    for(let i=0;i<s.length;i+=1){
        expandFromCenter(s,i,i)
        expandFromCenter(s,i,i+1)
    }
    return s.slice(start,start+max_length)
};
