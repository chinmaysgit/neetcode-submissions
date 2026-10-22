class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let map = new Map();

        for(let p of strs){
           let sub = new Array(26).fill(0); 
           for(let c in p){
            sub[p.charCodeAt(c) - 97]++;
           }
           let key = sub.join(",");
            if(map.has(key)){
                map.get(key).push(p);
            }else{
                map.set(key, [p]);
            }
        }
         return [...map.values()];
    }
}
