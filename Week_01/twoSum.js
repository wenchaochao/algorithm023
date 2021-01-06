

/* hash法  map中是否有target-i，一层循环搞定
   遍历的同时，记录一些信息，省去一层循环，空间换时间，需要记录已遍历过的数值和它的下标，可以借助查找表实现。（哈希表，平衡二叉搜索树）
 */

var twoSum = function(nums, target) {
    let myMap = new Map();
    myMap.set(nums[0], 0);
    for(let i = 1; i < nums.length; i++) {
        if(myMap.has(target - nums[i])){
            return [myMap.get(target - nums[i]), i];
        } else {
           myMap.set(nums[i], i);
        }
    }
};