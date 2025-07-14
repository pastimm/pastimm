var longestConsecutive = function(nums) {
    let res = 1;
    if (nums.length === 0) return 0;
    const set = new Set();
    for (let n of nums) {
        set.add(n);
    }
    /**
     * 这里其实对每个数字都进行了查找，一开始假设每个数字都可能是起点
     * 实际上，只有当数字是连续序列的起点时，才会进行查找
     * 所以这里要判断当前数字是否是连续序列起点，如果不是，则跳过
     * 比较 trck 的方式是看当前数字的前一个数字是否存在，若不存在，则说明当前数字是起点
     */
    for (let num of set) {
        if (set.has(num - 1)) continue;
        let currentCount = 1;
        while(set.has(num + 1)) {
            currentCount++;
            num++;
        }
        if (currentCount > res) res = currentCount
    }
    return res;
};

module.exports = longestConsecutive;