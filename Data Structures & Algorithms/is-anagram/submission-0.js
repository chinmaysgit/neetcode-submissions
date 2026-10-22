class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        let obj1 = {};
        let obj2 = {};

        for (let a of s){
            if(!obj1[a]){
                obj1[a] = 1;
            }else{
                obj1[a] += 1;
            }
        }
        for (let b of t){
            if(!obj2[b]){
                obj2[b] = 1;
            }else{
                obj2[b] += 1;
            }
        }

        let num1 = Object.keys(obj1);
        let num2 = Object.keys(obj2);

        if(num1.length !== num2.length) return false;

        for(let key of num1){
            if(obj1[key] !== obj2[key]) return false;
        }

        return true;
    }
}
