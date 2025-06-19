let result = document.getElementById("result");

document.getElementById("btn").addEventListener("click", () =>{
    let word_1 = document.getElementById("word-1").value.toLowerCase();
    let word_2 = document.getElementById("word-2").value.toLowerCase();

   //remove spaces and punctuations from both words

   let cleanedWord1= word_1.replace(/[^\wZ]/g,'');
   let cleanedWord2 = word_2.replace(/[^\w]/g,'');

   if(cleanedWord1.length!==cleanedWord2.length){
        result.textContent = "Not an Anagram";
        result.classList.remove("success");
        result.classList.add("error");
        return;
   }
   
   //count letter occurence in word one
   const letterCount1 = {};
   for(const char of cleanedWord1){
        letterCount1[char] = (letterCount1[char] || 0)+1;
   }
   
   //count letter occurence in word two
   const letterCount2 = {};
   for(const char of cleanedWord2){
        letterCount2[char] = (letterCount2[char] || 0)+1;
   }
   
   //compare letter counts
   for(const char in letterCount1){
    if(letterCount1[char]!=letterCount2[char]){
        result.textContent = "Not an Anagram";
        result.classList.remove("success");
        result.classList.add("error");
        return;

    }
   }

   //if all letter are same its an anagram
    result.textContent = "Its an Anagram";
    result.classList.remove("error");
    result.classList.add("success");

});

