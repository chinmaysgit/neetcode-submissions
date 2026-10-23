class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let s = 0;
        let r = numbers.length-1;

        while(s < r){
            if(numbers[s] + numbers[r] > target){
                r--;
            }else if(numbers[s] + numbers[r] < target){
                s++;
            }else{
                return [s+1,r+1];
            }
        }
        return [-1, -1];
    }
}
