function isAnagram(str1, str2) {
    if (str1.length !== str2.length) return false;
    const charCount1 = {};
    const charCount2 = {};
   for (let char of str1) {
      charCount1[char] = (charCount1[char] || 0) + 1;
    }
    for (let char of str2) {
      charCount2[char] = (charCount2[char] || 0) + 1;
    }
     for (let char in charCount1) {
      if (charCount1[char] !== charCount2[char]) return false;
    }
    return true;
  }
   function findAnagrams(words) {
    const result = [];
   for (let i = 0; i < words.length; i++) {
      const anagrams = [];
      for (let j = i + 1; j < words.length; j++) {
        if (isAnagram(words[i], words[j])) {
          anagrams.push(words[j]);
        }
      }
      if (anagrams.length > 0) {
        result.push([words[i], ...anagrams]);
      }
    }  
    return result;
  }
  const words = ["bat", "tap", "cat", "tab", "pat"];
  const anagramGroups = findAnagrams(words);
  console.log(anagramGroups);