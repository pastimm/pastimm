/**
 * 计数方法
 * 将每个字母出现的次数用数组记录下来，作为哈希表的键
 */

/**
 * 时间复杂度：O(n(k+∣Σ∣))，其中 n 是 strs 中的字符串的数量，k 是 strs 中的字符串的的最大长度，Σ 是字符集，在本题中字符集为所有小写字母，∣Σ∣=26。需要遍历 n 个字符串，对于每个字符串，需要 O(k) 的时间计算每个字母出现的次数，O(∣Σ∣) 的时间生成哈希表的键，以及 O(1) 的时间更新哈希表，因此总时间复杂度是 O(n(k+∣Σ∣))。
 * 空间复杂度：O(n(k+∣Σ∣))，其中 n 是 strs 中的字符串的数量，k 是 strs 中的字符串的最大长度，Σ 是字符集，在本题中字符集为所有小写字母，∣Σ∣=26。需要用哈希表存储全部字符串，而记录每个字符串中每个字母出现次数的数组需要的空间为 O(∣Σ∣)，在渐进意义下小于 O(n(k+∣Σ∣))，可以忽略不计。
 */
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
const groupAnagrams = function(strs) {
  const map = new Map();
  for (let str of strs) {
    const count = new Array(26).fill(0);
    for (let char of str) {
        count[char.charCodeAt() - 'a'.charCodeAt()]++;
    }
    map[count] ? map[count].push(str) : map[count] = [str];
  }
  return Object.values(map);
}

module.exports = groupAnagrams;