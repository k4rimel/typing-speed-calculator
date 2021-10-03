document.addEventListener("DOMContentLoaded", function () {
    // Variables d'éléments HTML
    const elementDutexteATaper = document.getElementById('texte-a-taper');
    const elementDutexteSaisi = document.getElementById('texte-saisi');
    let elementDeLog = document.getElementById('log');
    // Variable de type "String" contenant le texte à taper
    let texteAtaper = '';
    // Variable de type "String" contenant le texte saisi
    let texteSaisi = '';
    // Variable de type "Tableau" contenant les mots contenus dans le text à taper
    let tableauDeMots= [];
    // Variable de type "number" contenant le nombre de mots saisis actuellement
    const nombreDeMotsCorrectsSaisis = 0
    // Variable de type "number" contenant le temps écoulé en secondes
    const tempsEcoule = 0;
    // Variable de type "number" contenant la moyenne de mots / minute
    const moyenneParMinute = 0;
    

    // récupération du texte à taper situé dans le <div> "texte-à-taper"
    texteAtaper = elementDutexteATaper.innerHTML;
    // extraction de chaque mot et création du tableau de mots contenus dans la chaine de caractère "texteAtaper"
    tableauDeMots = texteAtaper.split(' ');

    elementDeLog.innerHTML = elementDutexteSaisi.value;
    // evennement de touche enfoncée sur l'élément de saisie du texte
    elementDutexteSaisi.addEventListener('keyup', function (event) {
        // à chaque fois que l'utilisateur appuie sur une touche dans la zone de saisie (<textarea>) 
        tableauDeTouchesAIgnorer = [
            'Shift',
            'Alt',
            'Control',
            'CapsLock',
            'Meta',
            'Escape',
            'Enter'
        ]
        texteSaisi += event.key;
        if (!tableauDeTouchesAIgnorer.includes(event.key)) {
            console.log('touche non spéciale');
            if (texteAtaper[texteSaisi.length -1] === event.key) {
                console.log('touche correcte');
                texteAtaper.replace(
                    texteAtaper[texteSaisi.length -1],
                    `<span id="chaineCorrecte">${event.key}</span>`
                );
            } else {
                console.log('touche correcte');
                texteAtaper.replace(
                    texteAtaper[texteSaisi.length -1],
                    `<span id="chaineIncorrecte">${texteAtaper[texteSaisi.length -1]}</span>`
                );
            }
        }
        // Gérer le "Backspace" càd la suppression de caractère
    });


});