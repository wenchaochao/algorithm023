学习笔记

visualgo 数据结构 算法 动态可视化网站

斐波那契数列
int fib(int n, int[] memo){
    if(n <= 1){
        return n
    }
    if(memo[n] == 0){
        memo[n] = fib(n-1) + fib(n -2)
    }
    return memo[n]
}
