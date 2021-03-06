// https://leetcode-cn.com/problems/container-with-most-water/
// 盛最多水的容器
// 双层循环
// function mostArea(heights) {
//     let max = 0;
//     for(let i = 0; i < heights.length; i++;) {
//         for (j = i + 1; j < heights.length; ++j) {
//             area = (j - i) * Math.min(heights[i], heights[j]);
//             max = Math.max(max, area);
//         }
//     }
//     return max;
// }

let height = [1,8,6,2,5,4,8,3,7];
// 左右向中间收敛
function maxArea(heights) {
    let max = 0;
    let i = 0, j = heights.length - 1;
    while(i < j) {
        let minHeight = heights[i] < heights[j] ? heights[i++] : heights[j--]; // i和j谁小谁就往里面挪
        let area = (j - i + 1 ) * minHeight;
        max = Math.max(max, area);
    }
    return max;
}

console.log(maxArea(height));