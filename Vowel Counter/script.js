function checkVowel(){
let text = document.getElementById("inputText").value;
let count = 0;
    text = text.toLowerCase();
    
    for (let i=0; i<text.length; i++){
        let char = text.charAt(i);
        if (isVowel(char)){
            count++;
        }
    }

    const result = document.getElementById('result');
    result.textContent = "Total Vowels: " + count;
}

function isVowel(char){
    const vowels = ["a", "e", "i", "o", "u"];
    return vowels.includes(char);
}