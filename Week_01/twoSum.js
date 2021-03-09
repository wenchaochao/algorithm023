// 链接：https://leetcode-cn.com/problems/two-sum
// 两数之和
// 给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出 和为目标值 的那 两个 整数，并返回它们的数组下标。
// 你可以假设每种输入只会对应一个答案。但是，数组中同一个元素不能使用两遍。
// 你可以按任意顺序返回答案。

/* hash法  map中是否有target-i，一层循环搞定
   遍历的同时，记录一些信息，省去一层循环，空间换时间，需要记录已遍历过的数值和它的下标，可以借助查找表实现。（哈希表，平衡二叉搜索树）
 */
var twoSum = function(nums, target) {
    let myMap = new Map();
    myMap.set(nums[0], 0); // 0
    for(let i = 1; i < nums.length; i++) {   // 1
        if(myMap.has(target - nums[i])){
            return [myMap.get(target - nums[i]), i];
        } else {
           myMap.set(nums[i], i);
        }
    }
};