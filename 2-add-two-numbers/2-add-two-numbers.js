/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let result = new ListNode(l1.val+l2.val,null);
    let current = result;
    l1 = l1.next;
    l2 = l2.next;
    while(true){
        if (current.val >= 10) {
            current.val -= 10;
            current.next = new ListNode(1, null);
            current = current.next;
        } else if (l1 || l2) {
            current.next = new ListNode;
            current = current.next;
        }
        if (l1 === null && l2 === null){
             if (current.val === 0)
                current = null;
            break;   
        } else if (l1 === null) {
            current.val += l2.val;
            l2 = l2.next;
        } else if (l2 === null) {
            current.val += l1.val;
            l1 = l1.next;
        } else { 
            current.val += l1.val + l2.val;
            l1 = l1.next;
            l2 = l2.next; 
        }
    }
    return result;
};