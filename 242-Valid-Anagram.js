/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

const isAnagram = (s, t) => {
    if(s.length !== t.length) return false

    const counterMap = new Map()

    for(let char of s){
        counterMap.set(char, (counterMap.get(char) || 0 ) + 1)
    }

    for (let char of t) {
        if (!counterMap.has(char) || counterMap.get(char) === 0) return false
        counterMap.set(char, counterMap.get(char) - 1)
    }
    return true
}