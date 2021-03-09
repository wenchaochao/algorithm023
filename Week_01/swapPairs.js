// https://leetcode-cn.com/problems/swap-nodes-in-pairs/
// 两两交换链表中的节点

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
// 1. 递归解法
// 令newHead为新头节点，则head为旧头节点
// 剩余链表的旧头节点是newHead.next，将其作为递归的参数，也就是递归中的“head”。
// 令head.next = 递归后的newHead，令newHead.next = head。
// 返回新链表的头节点newHead
// 链接：https://leetcode-cn.com/problems/swap-nodes-in-pairs/solution/tu-jie-24-liang-liang-jiao-huan-lian-bia-63fj/

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
    if (head == null || head.next == null) return head;
    let next = head.next;
    head.next = swapPairs(next.next);
    next.next = head;
    return next;
};