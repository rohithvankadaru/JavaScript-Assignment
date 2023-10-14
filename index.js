// JavaScript
// 1. Take a sentence as an input and reverse every word in that sentence.
// Example - This is a sunny day > shiT si a ynnus yad.
// 2. Perform sorting of an array in descending order.

//1st program
//main fuction take's sentence and reverses all words in sentence
function reverseWordsInSentance(sentence) {
    const sentenceArray = sentence.split(' ');
    let ans = '';

    sentenceArray.forEach(word => {
        ans += `${reverseWord(word)} `;
    });

    ans = ans.substring(0, ans.length - 1); //removes last space

    return ans;
}
// Reverses all characters in single word
function reverseWord(word) {
    let ans = '';
    for (let i = word.length - 1; i >= 0; i--) {
        ans += word[i];
    }
    return ans;
}
console.log(reverseWordsInSentance('This is a sunny day')); //invoking main Fn and printing reversed sentance


//2nd Program
//Perform sorting of an array in descending order.
const arr = [1, 5, 9, 11, 66, 55, 2, 6];  //sample array

for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
        if (arr[j] > arr[i]) {
            const temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }
}

console.log(arr);