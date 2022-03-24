export function createGoblinPoll(goblinName){
    const goblinDiv = document.createElement('div');
    const goblinNameLabel = document.createElement('p');
    const GoblinHP = document.createElement('p');
    const GoblinATTK = document.createElement('p');


    goblinNameLabel.textContent = goblinName;

    goblinDiv.append(goblinNameLabel);

    return goblinDiv;
}