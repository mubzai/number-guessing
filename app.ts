#! /usr/bin/env node

import inquirer from "inquirer";
const randomnumber = Math.floor(Math.random()*6);
const anwsers = await inquirer.prompt([
    {
        name : "userguessednumber",
        type : "number",
    massage : "please guess a number between 1-6",
    },

])
if(anwsers.userguessnumber=== randomnumber){
    console.log("you guessed the right number");
    
}else{console.log("you guessed the wrong number");


}