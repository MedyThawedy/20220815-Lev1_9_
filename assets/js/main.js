let words = ['hallo', 'Auto', 'Waschmaschine', 'Schrank', 'Katze', 'Beispiel', 'Eltern', 'Fenster',
    'Geburtstag', 'Himmel', 'schwimmen', 'Zeitung'];
let matches = [];

let arrowFnGetValue = (nr) => {
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
}

console.log('----------------------------------------------------------------');

let arrowFnDisplayMatches = () => {
    for (let index = 0; index < matches.length; index++) {
        document.getElementById('pOutput').innerHTML = document.getElementById('pOutput').innerHTML + matches[index] + '</br>';
        // matches.splice(index, 1);
    }
}

let arrowFnAddValueIntoWords = (neuWord) => {
    words.push(neuWord);
    document.getElementById('idNewWord').value = '';
}

