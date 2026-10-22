class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        for(let a of nums){
            if(nums.indexOf(a) !== nums.lastIndexOf(a)){
                return true;
            }
        }
        return false;
    }
}
