// 删除链表的节点
// https://leetcode-cn.com/problems/shan-chu-lian-biao-de-jie-dian-lcof/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var deleteNode = function(head, val) {
    if(head.val == val) {return head.next;}
    let  pre = head, cur = head.next;
    while(cur != null && cur.val != val) {
        pre = cur;
        cur = cur.next;
    }
    if(cur != null) pre.next = cur.next;
    return head;
};