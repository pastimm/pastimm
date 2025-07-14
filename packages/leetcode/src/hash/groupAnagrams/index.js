// https://leetcode.cn/problems/group-anagrams/description/?envType=study-plan-v2&envId=top-100-liked
/**
 * 输入: strs = ["eat", "tea", "tan", "ate", "nat", "bat"]

输出: [["bat"],["nat","tan"],["ate","eat","tea"]]

解释：

在 strs 中没有字符串可以通过重新排列来形成 "bat"。
字符串 "nat" 和 "tan" 是字母异位词，因为它们可以重新排列以形成彼此。
字符串 "ate" ，"eat" 和 "tea" 是字母异位词，因为它们可以重新排列以形成彼此。
 */

const sortType = require('./sort');
const countType = require('./count');
const strs = ["eat", "tea", "tan", "ate", "nat", "bat"]

console.log(sortType(strs))
console.log(countType(strs))