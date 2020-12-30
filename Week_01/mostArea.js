// 双层循环
function mostArea(heights) {
    let max = 0;
    for(let i = 0; i < heights.length; i++) {
        for (j = i + 1; j<heights.length; j++) {
            area = (j - i) * Math.min(heights[i], heights[j]);
            max = Math.max(max, area);
        }
    }
    return max;
}

// 左右向中间收敛
function maxArea(heights) {
    let max = 0;
    for (i = 0, j = heights.length - 1; i < j) {
        let minHeight = heights[i] < heights[j] ? heights[i ++] : heights[j --]; // i和j谁小谁就往里面挪
        area = (j - i) * minHeight;
        max = Math.max(max, area);
    }
    return max;
}