import { createGoblin, getGoblins, logout, checkAuth } from '../fetch-utils.js';
import { renderGoblinPoll, renderGoblinPollFromArr } from '../render-utils.js';

//const pollContainer = document.getElementById('poll-container');
const questionInput = document.getElementById('question-input');
const createPollButton = document.getElementById('create-poll');
const newGoblinContainer = document.querySelector('.new-goblin-here');
const hpUpButton = document.getElementById('hp-up');
const hpDownButton = document.getElementById('hp-down');
const attkUpButton = document.getElementById('attk-up');
const attkDownButton = document.getElementById('attk-down');
const finalGoblin = document.getElementById('finish-goblin');
const oldGoblinContainer = document.querySelector('.old-goblins');
const logOutButton = document.querySelector('.log-out');

checkAuth();

let goblinName = '';
let goblinhealth = 0;
let goblinattack = 0;

window.addEventListener('load', async () => {
    const goblinArray = await getGoblins();
    for (let goblin of goblinArray.body){
        const goblinEl = renderGoblinPollFromArr(goblin);

        oldGoblinContainer.append(goblinEl);

    }
});

logOutButton.addEventListener('click', ()=>{
    logout();
});
createPollButton.addEventListener('click', ()=>{
    goblinName = questionInput.value;
    questionInput.value = '';
    displayNewGoblin();

});

hpUpButton.addEventListener('click', ()=>{
    goblinhealth++;
    displayNewGoblin();
});

hpDownButton.addEventListener('click', ()=>{
    goblinhealth--;
    displayNewGoblin();
});

attkUpButton.addEventListener('click', ()=>{
    goblinattack++;
    displayNewGoblin();
});

attkDownButton.addEventListener('click', ()=>{
    goblinattack--;
    displayNewGoblin();
});

function displayNewGoblin(){
    newGoblinContainer.textContent = '';
    const newGob = renderGoblinPoll(goblinName, goblinhealth, goblinattack);

    newGoblinContainer.append(newGob);

    
}

finalGoblin.addEventListener('click', async ()=>{
    const finishedGoblin = {
        name: goblinName,
        hp: goblinhealth,
        attk: goblinattack,
    };
    
    await createGoblin(finishedGoblin);
    newGoblinContainer.textContent = '';
    //display past goblins here

   
    
    
    displayAllGoblins();
    
    //reset state
    goblinName = '';
    goblinhealth = 0;
    goblinattack = 0;
    //displayNewGoblin();
    
});

async function displayAllGoblins(){
    oldGoblinContainer.textContent = '';
    const goblinsInput = await getGoblins();
    for (let goblin of goblinsInput.body){
        const goblinEl = renderGoblinPollFromArr(goblin);

        oldGoblinContainer.append(goblinEl);


    }
}