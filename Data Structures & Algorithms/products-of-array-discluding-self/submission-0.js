class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        if(nums.length <= 1) return nums;

        let prefix = new Array(nums.length).fill(1);
        let suffix = new Array(nums.length).fill(1);

        for(let i = 1; i<nums.length; i++){
            prefix[i] = prefix[i-1] * nums[i-1];
        }
        for(let j = nums.length-2; j>=0; j--){
            suffix[j] = suffix[j+1] * nums[j+1];
        }

        for(let k = 0; k<prefix.length; k++){
            prefix[k] = prefix[k] * suffix[k];
        }

        return prefix;
    }
}
