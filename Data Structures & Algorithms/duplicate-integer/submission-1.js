class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let occur = {};
        for(let a of nums){
            if(!occur[a]){
                occur[a] = 1;
            }else{
                occur[a] += 1;
            }
        }
        return Object.values(occur).some(count => count > 1);
    }
}
