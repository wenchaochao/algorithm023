// 不为零元素前移，
function moveZero(nums) {
    let j = 0; // 不为零元素要放的位置
    for (let i = 0; i < nums.length; i++) {
        if(nums[i] != 0) {
            nums[j] = nums[i];
            if (i != j) {
                nums[i] = 0;
            }
            j++;
        }
    }
}
let a = [1,0,2,0,5,6];
console.log(moveZero(a));