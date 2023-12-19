const prompt = require('prompt-sync')()
const tableOfWords = require("./tableOfWords")
/**
 * @function addWord
 *  : cette fonction a pour rôle de demander à l'utilisateur d'ajouter un mot
 * @returns string[]
*/


function addWord(words) {
    let word = prompt("Quel mot voulez vous insérer ? ")
    words.push(word)
    tableOfWords.theLevelsTable.easy = words.filter(e => e.length <= 4)
    tableOfWords.theLevelsTable.medium = words.filter(e => e.length > 4 && e.length <= 6)
    tableOfWords.theLevelsTable.hard = words.filter(e => e.length > 6)
return word
}

exports.addWord = addWord;
/**
 * l'objet level stocke les différents tableaux représentant les niveaux de difficultés
 * ces tableaux niveaux de difficultés stockent les mots correspondants à leur difficultés
*/