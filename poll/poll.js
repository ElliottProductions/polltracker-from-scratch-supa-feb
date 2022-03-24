import {} from '../fetch-utils.js';
import { createGoblinPoll } from '../render-utils.js';

const pollContainer = document.getElementById('poll-container');
const questionInput = document.getElementById('question-input');
const createPollButton = document.getElementById('create-poll');
const newGoblinContainer = document.querySelector('.new-goblin-here');

let goblinName = '';
let goblinhealth = 0;
let goblinattack = 0;

createPollButton.addEventListener('click', ()=>{
    goblinName = questionInput.value;
    
    const newGob = createGoblinPoll(goblinName);

    newGoblinContainer.append(newGob);

});