https://leetcode-cn.com/problems/climbing-stairs/?utm_source=LCUS&utm_medium=ip_redirect&utm_campaign=transfer2chinahttps://leetcode-cn.com/problems/climbing-stairs/?utm_source=LCUS&utm_medium=ip_redirect&utm_campaign=transfer2china
// 爬楼梯
// 找最近 重复子问题
// f(n) = f(n-1) + f(n-2) fibonacci

function climbStairs(n) {
    if(n==0) return 1;
    else if(n<=2) return n;
    let f1 = 1, f2 = 2, f3 = 3;
    for(let i = 3; i <= n; i++) {
        f3 = f1 + f2;    
        f1 = f2;
        f2= f3;
    }
    return f3;
}

function climbStairs2(n) {
    let f1 = 0, f2 = 0, f3 = 1;
    for(let i = 1; i <= n; i++) {         
        f1 = f2;
        f2= f3;
        f3 = f1 + f2;
    }
    return f3;
}