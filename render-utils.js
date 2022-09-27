import { deleteGoblin } from './fetch-utils.js';

export function renderGoblinPoll(goblinName, hp, attk){
    const goblinDiv = document.createElement('div');
    goblinDiv.classList.add('new-gob');
    const goblinNameLabel = document.createElement('p');
    const GoblinHP = document.createElement('p');
    const GoblinATTK = document.createElement('p');


    goblinNameLabel.textContent = goblinName;
    GoblinHP.textContent = `HP: ${hp}`;
    GoblinATTK.textContent = `ATTK: ${attk}`;

    goblinDiv.append(goblinNameLabel, GoblinHP, GoblinATTK);

    return goblinDiv;
}

///modufy tgus 
export function renderGoblinPollFromArr(goblinName){
    const goblinDiv = document.createElement('div');
    goblinDiv.classList.add('new-gob');
    const goblinNameLabel = document.createElement('p');
    const GoblinHP = document.createElement('p');
    const GoblinATTK = document.createElement('p');
    const goblinDelete = document.createElement('button');


    goblinNameLabel.textContent = goblinName.name;
    GoblinHP.textContent = `HP: ${goblinName.hp}`;
    GoblinATTK.textContent = `ATTK: ${goblinName.attk}`;
    goblinDelete.textContent = 'Delete';

    goblinDelete.addEventListener('click', ()=>{
        deleteGoblin(goblinName);
        goblinDiv.remove();
    });
    goblinDiv.append(goblinNameLabel, GoblinHP, GoblinATTK, goblinDelete);

    return goblinDiv;
}