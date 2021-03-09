// 给你一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，
// 使得 a + b + c = 0 ？请你找出所有和为 0 且不重复的三元组。
// 链接：https://leetcode-cn.com/problems/3sum

/** 三数之和
 * @param {number[]} nums
 * @return {number[][]}
 */
// 1. 双指针夹逼
// - 判重处理
// - 双指针与与快慢指针
var threeSum = function(nums) {
    nums.sort((a,b) => (a-b));
    let res = [];
    for(let i = 0; i < nums.length - 2; i++) {
        if(i == 0 || (i > 0 && nums[i] != nums[i - 1])) { //减少重复遍历
            let lo = i+1, hi = nums.length - 1,  sum  = 0 - nums[i];
            while(lo < hi) {
                if(nums[lo] + nums[hi] == sum) {
                    res.push([nums[i], nums[lo], nums[hi]])
                    while(lo < hi && nums[lo] == nums[lo + 1]) lo++; // 相同则继续移动
                    while(lo < hi && nums[hi] == nums[hi - 1]) hi--;
                    lo++;
                    hi--;
                } else if(nums[lo] + nums[hi] > sum) {
                    hi--
                } else {
                    lo++
                }
            }
        }
    }
    return res
};

// 2. 两遍hash
var sum = function(nums) {
    nums.sort((a,b)=>a-b);
    let res = [];
    for(let i=0; i<nums.length-2;i++) {
        if(i = 0 || (i > 0 && nums[i] != nums[i - 1])) {
            let lo=i+1, hi=nums.length-1, sum=0-nums[i];
            while(lo<hi){
                if(nums[lo] + nums[hi] == sum) {
                    res.push(nums[lo], nums[hi], nums[i]);
                    while(lo<hi && nums[lo] == nums[lo+1]){lo++}
                    while(lo < hi && nums[hi] == nums[hi -1]) hi--;
                    lo++;
                    hi--;
                } else if(nums[lo] + nums[hi] > sum) {
                    hi--;
                } else {
                    lo++;
                }
            }
        }
    }
    return res;
} 