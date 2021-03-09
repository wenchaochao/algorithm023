// 思路
// 构建一个二叉树需要构建三部分：root、左子树、右子树
// 左子树、右子树的构建，又包括：root、左子树、右子树
// 解题关键在于定位出根节点，划分出左右子树，然后 递归 构建左右子树
// 具体做法
// preorder 数组的第一项肯定是根节点 —— 因为前序遍历的顺序是 根| 左|右根∣左∣右。
// 根据根节点，在 inorder [左 | 根 | 右][左∣根∣右] 中划分出分别属于左、右子树的 inorder 序列。
// 并求出左右子树的节点个数，在 preorder 中划分出分别属于左、右子树的 preorder 序列。
// 于是就有了左、右子树的 preorder 和 inorder 序列，递归构建左、右子树就好。

const buildTree = (preorder, inorder) => {
    const map = new Map();
    for (let i = 0; i < inorder.length; i++) {
      map.set(inorder[i], i);
    }
    const helper = (p_start, p_end, i_start, i_end) => {
      if (p_start > p_end) return null;
      let rootVal = preorder[p_start];    // 根节点的值
      let root = new TreeNode(rootVal);   // 根节点
      let mid = map.get(rootVal);         // 根节点在inorder的位置
      let leftNum = mid - i_start;        // 左子树的节点数
      root.left = helper(p_start + 1, p_start + leftNum, i_start, mid - 1);
      root.right = helper(p_start + leftNum + 1, p_end, mid + 1, i_end);
      return root;
    };
    return helper(0, preorder.length - 1, 0, inorder.length - 1);
  };
  

//  参考链接：https://leetcode-cn.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/solution/ding-wei-chu-gen-jie-dian-de-wei-zhi-hua-fen-zuo-y/

function buildTree(preorder, inorder) {
  const map = new Map();
  for(let i=0; i<inorder.length;i++){
    map.set(inorder[i], i);
  }
  const helper = (p_start, p_end, i_start, i_end) => {
    if (p_start > p_end) return null;
    let valroot = preorder[p_start];
    let root = new TreeNode(valroot);
    let mid = map.get(valroot);
    let leftNum = mid - i_start;
    root.left = helper(p_start + 1, p_start + leftNum, i_start, mid - 1);
    root.right = helper(p_start + leftNum + 1, p_end, mid + 1, i_end);
    return root;
  }
  return helper(0, preorder.length - 1, 0, inorder.length -1);
}