/**
 * 最长递增子序列
 * 【4，5，1， 7， 8， 9， 3， 4， 2】
 * 【1， 7， 8， 9】
 * 一个，[4] -> [1]
 * 两个，[4,5] -> 
 * 
 */

function longestIncreaseCons(nums) {
    if (nums.length === 0) return [];
    const results = [];
    nums.forEach((num, index) => {
        if (index === 0) {
            results.push([num])
            return;
        }
        updateResults(num);
        console.log(results)
    })
    function updateResults(num) {
        for(let i = results.length - 1; i >= 0; i--) {
            const line = results[i];
            if (line[line.length - 1] < num) {
                results[i+1] = [...line, num]
                // results.push([...line, num])
                return;
            }
        }
        if (num < results[0][0]) {
            results[0] = [num]
        }
    }
    return results;
}

const nums = [4, 5, 1, 7, 8, 9, 3, 4, 2];
console.log('longestIncreaseCons', longestIncreaseCons(nums));