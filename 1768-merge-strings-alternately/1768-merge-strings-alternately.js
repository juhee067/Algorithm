var mergeAlternately = function(word1, word2){
  let newString = "";
  let maxLength = word2.length;
  if (word1.length > word2.length) {
    maxLength = word1.length;
  }
  for (let i = 0; i < maxLength; i++) {
    if (word1.length > i) {
      newString += word1[i];
    }
    if (word2.length > i) {
      newString += word2[i];
    }
  }
  return newString;
};
