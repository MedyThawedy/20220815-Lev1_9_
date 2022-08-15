let words = ['hallo', 'Auto', 'Waschmaschine', 'Schrank', 'Katze', 'Beispiel', 'Eltern', 'Fenster',
    'Geburtstag', 'Himmel', 'schwimmen', 'Zeitung'];
let matches = [];

let arrowFnGetValue = (nr) => {
    document.getElementById('pOutput').innerHTML = '';
    let numberOfLetters = parseInt(nr);
    console.log('nr : ', numberOfLetters);
    for (let i = 0; i < words.length; i++) {
        console.log('i : ', i);
        console.log('Word : ', words[i], ' Word length :', words[i].length);
        if (words[i].length === numberOfLetters) {
            matches.push(words[i]);
            console.log('length of : ', words[i].length, 'nr :', numberOfLetters, 'matches : ', matches);
        }
    }
    arrowFnDisplayMatches();
    matches = [];
}

console.log('----------------------------------------------------------------');

let arrowFnDisplayMatches = () => {
    for (let index = 0; index < matches.length; index++) {
        document.getElementById('pOutput').innerHTML = document.getElementById('pOutput').innerHTML + matches[index] + '</br>';
        console.log('Matches : ' + matches + 'index : ' + matches[index]);
    }
}

let arrowFnAddValueIntoWords = (neuWord) => {
    words.push(neuWord);
    document.getElementById('idNewWord').value = '';
}

