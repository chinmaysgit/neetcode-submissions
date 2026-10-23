class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let longestLength = 0;
        let map = new Map();

        for(let num of nums){
            map.set(num, false);
        }

        for(let num of nums){
            let currentLength = 1;
            map.set(num, true);
            let nextNum = num+1;

            while(map.has(nextNum) && map.get(nextNum) !== true){
                map.set(nextNum, true);
                nextNum++;
                currentLength++;
            }

            let prevNum = num-1;
            while(map.has(prevNum) && map.get(prevNum) !== true){
                map.set(prevNum, true);
                prevNum--;
                currentLength++;
            }

            longestLength = Math.max(currentLength, longestLength);
        }

        return longestLength;
    }
}
