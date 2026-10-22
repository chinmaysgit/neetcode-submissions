class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {

        if(s.length !== t.length) return false;

        let occur = new Array(26).fill(0);

        for (let a in s){
            occur[s.charCodeAt(a) - 97] += 1;
            occur[t.charCodeAt(a) - 97] -= 1;
        }

        return occur.every(num => num === 0);
    }
}
