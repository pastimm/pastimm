/**
 * 题解1 
 * 互为字母异位词的两个字符串包含的字母相同，在对字符排序后，其结构式一致的
 * 
 * 时间复杂度: 时间复杂度：O(nklogk)，其中 n 是 strs 中的字符串的数量，
 * k 是 strs 中的字符串的的最大长度。需要遍历 n 个字符串，对于每个字符串，需要 O(klogk) 的时间进行排序以及 O(1) 的时间更新哈希表，
 * 因此总时间复杂度是 O(nklogk)。
 * 空间复杂度：O(nk)，其中 n 是 strs 中的字符串的数量，
 * k 是 strs 中的字符串的的最大长度。需要用哈希表存储全部字符串。

 */

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
const groupAnagrams = function(strs) {
  const map = new Map();
    for (let str of strs) {
        const sortedStr = str.split('').sort().join('');
        const list = map.get(sortedStr) || [];
        list.push(str);
        map.set(sortedStr, list);
    }
    return Array.from(map.values());
};

module.exports = groupAnagrams;