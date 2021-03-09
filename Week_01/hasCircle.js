// 环形链表
// https://leetcode-cn.com/problems/linked-list-cycle/solution/huan-xing-lian-biao-by-leetcode-solution/

// 1. 哈希
// 最容易想到的方法是遍历所有节点，每次遍历到一个节点时，判断该节点此前是否被访问过。
// 具体地，我们可以使用哈希表来存储所有已经访问过的节点
// 每次我们到达一个节点，如果该节点已经存在于哈希表中，则说明该链表是环形链表，否则就将该节点加入哈希表中。

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    let myset = new Set();
    while (head != null) {
        if(myset.has(head)){
            return true;
        }
        myset.add(head);
        head = head.next;
    }  
    return false;
};


// // 2.快慢指针
// 观察下面的代码，我们使用的是 while 循环，循环条件先于循环体。由于循环条件一定是判断快慢指针是否重合，如果我们将两个指针初始都置于 head，那么 while 循环就不会执行。
// 因此，我们可以假想一个在 head 之前的虚拟节点，慢指针从虚拟节点移动一步到达 head，快指针从虚拟节点移动两步到达 head.next，这样我们就可以使用 while 循环了。
// 当然，我们也可以使用 do-while 循环。此时，我们就可以把快慢指针的初始值都置为 head。
var hasCycle = function(head) {
    if(head == null || head.next == null) {
        return false;
    }
    let slow = head;
    let fast = head.next;
    while(slow != fast) {
        if(fast == null || fast.next == null) return false;
        slow = slow.next;
        fast = fast.next.next;
    }
    return true;
}