/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
   let result=[];
// 1. 문자를 " " 기준으로 나눈다.
// 2. " " 나눈 배열에 포함 되어있는 " "를 모두 없앤다.
// 3. 문자만 남은 배열로 역순으로 나열한다.
const nonSpaceArr = s.split(' ').filter((item)=> item!=="").reverse();
// 4. 단어와 단어 사이에 " "을 포함시켜준다.
for(let i=0; i<nonSpaceArr.length; i++){
    if(i === nonSpaceArr.length - 1){
        result.push(nonSpaceArr[i]);
        return result.join('')
    }
result.push(nonSpaceArr[i] + " ");
}
return result.join('')
};
