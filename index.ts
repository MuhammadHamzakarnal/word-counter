#! usr/bin/env node
import inquirer from "inquirer"


const answers :{
    sentences: string
} = await inquirer.prompt([
    {
        name:"sentences",
        type:"input",
        message:"Enter your sentences to count the word"

    }
])

const words = answers.sentences.trim().split(" ")


//print the array of words to the console

console.log(words);
 
// print the word count of the sentence to the console

console.log(`your sentence word count is ${words.length}` );




















