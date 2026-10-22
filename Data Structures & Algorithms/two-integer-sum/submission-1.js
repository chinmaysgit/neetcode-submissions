class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let map = new Map();

        for(let a in nums){
            let comp = target - nums[a];
            if(map.has(nums[a])){
                return [Number(map.get(nums[a])), Number(a)];
            }else{
                map.set(comp, Number(a));
            }
        }
    }
}
