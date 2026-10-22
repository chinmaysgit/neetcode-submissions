class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let occur = {};
        let arr = Array.from(
            { length: nums.length + 1 },
            () => []
        );
        let result = [];
        for (let a = 0; a < nums.length; a++) {
            if (occur[nums[a]]) {
                occur[nums[a]] += 1;
            } else {
                occur[nums[a]] = 1;
            }
        }
        for (let ele in occur) {
            arr[occur[ele]].push(ele);
        }

        for (let i = arr.length - 1; i >= 0; i--) {
            for (let j = arr[i].length - 1; j >= 0; j--) {
                result.push(arr[i][j]);
                if (result.length === k) {
                    return result;
                }
            }

        }
        return result;
    }
}
