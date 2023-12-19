const prompt = require("prompt-sync")();
const menu = require("./menu et vérification");
const tableOfWords = require("./tableOfWords");
const randomize = require("./randomizingWords");
const hideword = require("./hideWord");
const showChar = require("./showCharv1");
const congrat = require("./congratulations");
const innovationMenu = require("./innovationMenu");
const messageEchec  =require("./messageIncorrect");

function play() {

    console.log("veuillez choisir un niveau de difficulté : ")
    console.log(" easy - medium - hard ")
    let level = prompt("=> ")
    let hidenWord;
    let hideWord;
    if (level == "easy") {
        hideWord = randomize.getRandomWord(tableOfWords.theLevelsTable.easy)
        hidenWord = hideword.hideword(hideWord)
        
    }
    if (level == "medium") {
        hideWord = randomize.getRandomWord(tableOfWords.theLevelsTable.medium)
        hidenWord = hideword.hideword(hideWord)
        
    }
    if (level == "hard") {
        hideWord = randomize.getRandomWord(tableOfWords.theLevelsTable.hard)
        hidenWord = hideword.hideword(hideWord)
        
    }

    let tentatives = 0;
    let letter;
    let answer;
    let enteredLetters = [];
    while (tentatives < 10) {
         console.log(`----------------------\nle mot caché : ${hidenWord} `) 
        letter = prompt("veuillez saisir une lettre ou le mot complet :  ")
        answer = menu.verify(letter, hideWord)
        enteredLetters.push(letter)
        if (answer == false) {
            tentatives++;
        }
        console.log(`\nles lettres déjà entrées sont {${enteredLetters}} `);
        congrat.congrat(letter, hideWord)
        console.log(`\n il vous reste ${10 - tentatives} tentatives `)
        hidenWord = showChar.showChar(hideWord, letter, answer, hidenWord)
        if (hidenWord == hideWord || letter == hideWord) {
            innovationMenu.win()
            break;
        } if (tentatives == 10) {
            innovationMenu.lose()
            console.log('GAME OVER');;
            break;
        } if (letter.length > 1 && letter != hideWord) {
            innovationMenu.lose();
            console.log('GAME OVER');;
            break;
        }

    }

}

exports.play = play;





