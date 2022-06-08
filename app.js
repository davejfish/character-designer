// import needed modules

// state
const character = {
    head: 'duck',
    middle: 'blue',
    pants: 'white',
    phrases: []
};

// components

// Designer
const designSection = document.getElementById('design-section');
const [headSelect, middleSelect, pantsSelect] = designSection.querySelectorAll('select');

headSelect.addEventListener('change', () => {
    character.head = headSelect.value;
    displayDesign();
});

middleSelect.addEventListener('change', () => {
    // *** Complete the middle select change handler
    character.middle = middleSelect.value;
    displayDesign();
});

pantsSelect.addEventListener('change', () => {
    // *** Complete the pants select change handler
    character.pants = pantsSelect.value;
    displayDesign();
});

function displayDesigner() {
    headSelect.value = character.head;
    // *** Assign the initial values of the middle select and pants select!
    middleSelect.value = character.middle;
    pantsSelect.value = character.pants;
}

// AddPhrase
const addPhraseSection = document.getElementById('add-phrase-section');
const phraseInput = addPhraseSection.querySelector('input');
// *** Select the button from the add phrase section
// const phraseButton = ?;
const phraseButton = addPhraseSection.querySelector('button');

function handleAddPhrase() {
    if (phraseInput.value) {
        // *** add the current phrase value to the character phrases
        character.phrases.push(phraseInput.value);
        displayPhrases();
        phraseInput.value = '';
        phraseInput.focus();
    }
}

// *** Add a click handler to the phrase button that calls handleAddPhrase
phraseButton.addEventListener('click', () => {
    handleAddPhrase();
});

phraseInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        handleAddPhrase();
    }
});

// Character
const characterSection = document.getElementById('character-section');
const [headImage, middleImage, pantsImage] = characterSection.querySelectorAll('img');

function displayCharacter() {
    // *** Set the src properties for the three images.
    // You can use:
    // 'assets/character/' + <get prop value here> + '-head.png'
    // to format the correct file name
    headImage.src = 'assets/character/' + character.head + '-head.png';
    middleImage.src = 'assets/character/' + character.middle + '-middle.png';
    pantsImage.src = 'assets/character/' + character.pants + '-pants.png';
}

// Phrases
const phrasesSection = document.getElementById('phrases-section');
const phraseList = phrasesSection.querySelector('ul');

function displayPhrases() {
    phraseList.innerHTML = '';

    // ** Create an li for each phrase and append to the list
    for (let i of character.phrases) {
        let newList = document.createElement('li');
        newList.textContent = i;
        phraseList.append(newList);
    }    
}

// page load actions
function displayDesign() {
    displayCharacter();
    displayPhrases();
}

displayDesigner();
displayDesign();


