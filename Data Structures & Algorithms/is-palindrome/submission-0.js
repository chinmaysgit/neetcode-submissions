class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let str = s.toLowerCase();
        let i = 0;
        let j = str.length - 1;

        while(i < j){
            if(!/[a-z0-9]/.test(str[i])){
                i++;
            }else if(!/[a-z0-9]/.test(str[j])){
                j--;
            }else if(str[i] !== str[j]){
                return false;
            }else{
                i++;
                j--;
            }
        }
        return true;
    }
}
