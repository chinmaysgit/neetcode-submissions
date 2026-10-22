class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let occur = new Set();
        for(let a of nums){
            if(occur.has(a)){
                return true;
            }
            occur.add(a);
        }
        return false;
    }
}
