var twoSum = function(nums, target) {
    let res = [];
    nums.sort((a,b) => (a - b));
    console.log(nums);
    for(let i = 0, j = nums.length - 1; i < j; ) {
      if(nums[i] + nums[j] == target){
        res = [i, j];
        break;
      } else if(nums[i] + nums[j] > target) {       
        j--
      } else {
        i++
      }   
    }
    return res;
};
let arr = [3,2,4];
twoSum(arr, 6)