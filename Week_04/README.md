学习笔记
贪心：当下做局部最优判断    比如：最小生成树、求哈夫曼编码、coin[20,10,5,1]、分饼干、买卖股票、数组开始跳到最后
回溯：能够回退
动态规划：最优判断 + 回退 (会保存之前的结果，并根据以前的结果对当前进行选择，有回退功能)

二分查找 (单调有序 边界 index)
代码模板
left = 0, right = len(array) - 1
while left <= right:
    mid = (left + right) /2
    if array[mid] == target:
        break or return result
    elseif array[mid] < target:
        left = mid +1
    else:
        right = mid -1

求x的平方根  二分查找、牛顿迭代法   
class Solution(object):
    def mySqrt(self, x):
        r = x
        while r * r > x:
            r = (r + x/r) / 2
        return r

搜索螺旋排序数组  二分查找