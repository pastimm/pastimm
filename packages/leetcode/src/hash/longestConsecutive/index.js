const ans = require('./longestConsecutive');
const force = require('./force');
// 测试用例
function testLongestConsecutive(longestConsecutive) {
    console.log('=== 最长连续序列算法测试 ===\n');
    
    // 测试用例1
    const nums1 = [100, 4, 200, 1, 3, 2];
    const result1 = longestConsecutive(nums1);
    console.log(`测试用例1: [${nums1.join(', ')}]`);
    console.log(`期望输出: 4`);
    console.log(`实际输出: ${result1}`);
    console.log(`测试结果: ${result1 === 4 ? '✅ 通过' : '❌ 失败'}\n`);
    
    // 测试用例2
    const nums2 = [0, 3, 7, 2, 5, 8, 4, 6, 0, 1];
    const result2 = longestConsecutive(nums2);
    console.log(`测试用例2: [${nums2.join(', ')}]`);
    console.log(`期望输出: 9`);
    console.log(`实际输出: ${result2}`);
    console.log(`测试结果: ${result2 === 9 ? '✅ 通过' : '❌ 失败'}\n`);
    
    // 测试用例3
    const nums3 = [1, 0, 1, 2];
    const result3 = longestConsecutive(nums3);
    console.log(`测试用例3: [${nums3.join(', ')}]`);
    console.log(`期望输出: 3`);
    console.log(`实际输出: ${result3}`);
    console.log(`测试结果: ${result3 === 3 ? '✅ 通过' : '❌ 失败'}\n`);
    
    // 边界测试用例
    const nums4 = [];
    const result4 = longestConsecutive(nums4);
    console.log(`边界测试: 空数组`);
    console.log(`期望输出: 0`);
    console.log(`实际输出: ${result4}`);
    console.log(`测试结果: ${result4 === 0 ? '✅ 通过' : '❌ 失败'}\n`);
    
    const nums5 = [1];
    const result5 = longestConsecutive(nums5);
    console.log(`边界测试: 单个元素 [1]`);
    console.log(`期望输出: 1`);
    console.log(`实际输出: ${result5}`);
    console.log(`测试结果: ${result5 === 1 ? '✅ 通过' : '❌ 失败'}\n`);
}

// 运行测试
testLongestConsecutive(force);
