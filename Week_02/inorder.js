// 二叉树中序遍历    中等

// 1、递归 时间复杂度：O(n) 空间复杂度O(n)
var inorderTraversal = function(root) {
    let res = [];
    const inorder = (root) => {
        if(!root) {
            return;
        }
        inorder(root.left)
        res.push(root.val);
        inorder(root.right);
    }
    inorder(root);
    return res;
};

// 2.迭代法
// 栈S;
// p= root;
// while(p || S不空){
//     while(p){
//         p入S;
//         p = p的左子树;
//     }
//     p = S.top 出栈;
//     访问p;
//     p = p的右子树;
// }
inorderTraversal(root) {
    let S = [];
    let v = [];
    while(root || S.size()){
        while(root){
            S.push(root);
            root=root.left;
        }
        root=S.top();
        S.pop();
        v.push(root.val);
        root=root.right;
    }
    return v      
}

// 3莫里斯遍历
// 假设当前遍历到的节点为 x
// 1、如果 xx 无左孩子，先将 xx 的值加入答案数组，再访问 xx 的右孩子，即 x = x.\textit{right}x=x.right。
// 2、如果 xx 有左孩子，则找到 xx 左子树上最右的节点（即左子树中序遍历的最后一个节点，xx 在中序遍历中的前驱节点），我们记为 \textit{predecessor}predecessor。根据 \textit{predecessor}predecessor 的右孩子是否为空，进行如下操作。
//   如果predecessor 的右孩子为空，则将其右孩子指向 xx，然后访问 xx 的左孩子，即 x = x.\textit{left}x=x.left。
//   如果predecessor 的右孩子不为空，则此时其右孩子指向 xx，说明我们已经遍历完 xx 的左子树，我们将 \textit{predecessor}predecessor 的右孩子置空，将 xx 的值加入答案数组，然后访问 xx 的右孩子，即 x = x.\textit{right}x=x.right。
// 3、重复上述操作，直至访问完整棵树。
// 其实整个过程我们就多做一步：假设当前遍历到的节点为 xx，将 xx 的左子树中最右边的节点的右孩子指向 xx，这样在左子树遍历完成后我们通过这个指向走回了 xx，且能通过这个指向知晓我们已经遍历完成了左子树，而不用再通过栈来维护，省去了栈的空间复杂度。

var inorderTraversal = function(root) {
    const res = [];
    let predecessor = null;

    while (root) {
        if (root.left) {
            // predecessor 节点就是当前 root 节点向左走一步，然后一直向右走至无法走为止
            predecessor = root.left;
            while (predecessor.right && predecessor.right !== root) {
                predecessor = predecessor.right;
            }

            // 让 predecessor 的右指针指向 root，继续遍历左子树
            if (!predecessor.right) {
                predecessor.right = root;
                root = root.left;
            }
            // 说明左子树已经访问完了，我们需要断开链接
            else {
                res.push(root.val);
                predecessor.right = null;
                root = root.right;
            }
        }
        // 如果没有左孩子，则直接访问右孩子
        else {
            res.push(root.val);
            root = root.right;
        }
    }

    return res;
};
