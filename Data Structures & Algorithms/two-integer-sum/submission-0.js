class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let obj = {};

        for(let a = 0; a < nums.length; a++){
            if(nums[a] in obj){
                return [obj[nums[a]], Number(a)];
            }else{               
                obj[target - nums[a]] = a;
            }
        }

        return [-1, -1];
    }
}
