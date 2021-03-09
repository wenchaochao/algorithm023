// 反转链表
// https://leetcode-cn.com/problems/reverse-linked-list/

// 反转一个单链表。
/**
 * @param {ListNode} head
 * @return {ListNode}
 *      head
 * pre  cur   next
 * null  1     2
 */
var reverseList = function(head) {
    let pre = null, cur = head;
    while(cur) {
       const next = cur.next;
       cur.next = pre;
       pre = cur;
       cur = next;
    }
    return pre;
};