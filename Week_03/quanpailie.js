// 怎么写递归函数
// 我们要在这个包含解的空间树上，用 DFS（递归）的方式搜索出所有的解。

// dfs 函数做的事：基于当前的 path，继续选数，直到构建出合法的path，加入解集。

// 递归的入口：dfs 执行传入空 path，什么都还没选。

// 函数体内，用 for 循环，枚举出当前所有的选项，并通过 if 语句跳过剪枝项。

// 每一轮迭代，作出一个选择，基于它，继续选（递归调用）。
// 递归的出口：当构建的 path 数组长度等于 nums 长度，就选够了，加入解集。

// 为什么要回溯
// 我们不是找到一个排列就完事，要找出所有满足条件的排列。

// 递归结束时，结束的是当前的递归分支，还要去别的分支继续搜。

// 所以，要撤销当前的选择，回到选择前的状态，去选下一个选项，即切入下一个分支。

// 退回来，把路走全，才能在一棵空间树中，回溯出所有的解。

// 参考链接：https://leetcode-cn.com/problems/permutations/solution/chou-xiang-cheng-jue-ce-shu-yi-ge-pai-lie-jiu-xian/
const permute = (nums) => {
    const res = [];
    const used = {};
  
    function dfs(path) {
      if (path.length == nums.length) {
        res.push(path.slice());
        return;
      }
      for (const num of nums) {
        // if (path.includes(num)) continue; // 查找的时间是O(n)，别这么写，时间复杂度增加
        if (used[num]) continue;
        path.push(num);
        used[num] = true;
        dfs(path);
        path.pop();
        used[num] = false;
      }
    }
  
    dfs([]);
    return res;
  };
  
