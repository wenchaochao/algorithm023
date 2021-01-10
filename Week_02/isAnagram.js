// 字母异位词 简单
// t 是 ss 的异位词等价于「两个字符串排序后相等」。因此我们可以对字符串 ss 和 tt 分别排序，看排序后的字符串是否相等即可判断。此外，如果 ss 和 tt 的长度不同，tt 必然不是 ss 的异位词。
var isAnagram = function(s, t) {
    return s.length == t.length && [...s].sort().join('') === [...t].sort().join('')
};
// 时间复杂度：O(nlogn)O(nlogn)，其中 nn 为 ss 的长度。排序的时间复杂度为 O(nlogn)O(nlogn)，比较两个字符串是否相等时间复杂度为 O(n)O(n)，因此总体时间复杂度为 O(n \log n+n)=O(n\log n)O(nlogn+n)=O(nlogn)。

// 空间复杂度：O(logn)O(logn)。排序需要 O(logn)O(logn) 的空间复杂度。注意，在某些语言（比如 Java & JavaScript）中字符串是不可变的，因此我们需要额外的 O(n)O(n) 的空间来拷贝字符串。但是我们忽略这一复杂度分析


// 2、哈希表
// 从另一个角度考虑，tt 是 ss 的异位词等价于「两个字符串中字符出现的种类和次数均相等」。由于字符串只包含 2626 个小写字母，因此我们可以维护一个长度为 2626 的频次数组 \textit{table}table，先遍历记录字符串 ss 中字符出现的频次，然后遍历字符串 tt，减去 table 中对应的频次，如果出现 table[i]<0，则说明 tt 包含一个不在 ss 中的额外字符，返回 false 即可。

var isAnagram = function(s, t) {
    if (s.length !== t.length) {
        return false;
    }
    const table = new Array(26).fill(0);
    for (let i = 0; i < s.length; ++i) {
        table[s.codePointAt(i) - 'a'.codePointAt(0)]++;
    }
    for (let i = 0; i < t.length; ++i) {
        table[t.codePointAt(i) - 'a'.codePointAt(0)]--;
        if (table[t.codePointAt(i) - 'a'.codePointAt(0)] < 0) {
            return false;
        }
    }
    return true;
};