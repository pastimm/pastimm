/**
 * 给定一个未排序的整数数组 nums ，找出数字连续的最长序列（不要求序列元素在原数组中连续）的长度。

请你设计并实现时间复杂度为 O(n) 的算法解决此问题。

 

示例 1：

输入：nums = [100,4,200,1,3,2]
输出：4
解释：最长数字连续序列是 [1, 2, 3, 4]。它的长度为 4。
示例 2：

输入：nums = [0,3,7,2,5,8,4,6,0,1]
输出：9
示例 3：

输入：nums = [1,0,1,2]
输出：3

 */
/**
 * @param {number[]} nums
 * @return {number}
 */
const longestConsecutive = function(nums) {
    // 如果数组为空，返回0
    if (nums.length === 0) return 0;
    
    // 使用Set存储所有数字，提供O(1)查找时间
    const numSet = new Set(nums);
    let maxLength = 0;
    
    // 遍历每个数字
    for (const num of numSet) {
        // 如果当前数字是连续序列的起点（前面没有数字）
        if (!numSet.has(num - 1)) {
            let currentNum = num;
            let currentLength = 1;
            
            // 向后查找连续的数字
            while (numSet.has(currentNum + 1)) {
                currentNum++;
                currentLength++;
            }
            
            // 更新最大长度
            maxLength = Math.max(maxLength, currentLength);
        }
    }
    
    return maxLength;
};
module.exports = longestConsecutive;