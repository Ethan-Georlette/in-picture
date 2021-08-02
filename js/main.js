'use strict'
var gQuests = [];
var gQuestIndex = 0;

// console.dir(gQuests);


function initGame() {
    gQuestIndex=0;
    gQuests = createQuests(3);
    console.log(gQuests);
    renderQuest();
}
function createQuests(num) {
    var options = [
        ['patrik.jpg', 'This picture is true to what language?', 'javaScript', 'java', 'C#', 0],
        ['math.jpg', 'Which method should he use to get the mathematical answer ?', 'toString', 'parseInt()', 1],
        ['Shrek2.jpg', 'From what franchise this picture?', 'madagascar', 'Shrek', 'Star Wars', 1]
    ];
    var quests = [];
    for (var i = 0; i < num; i++) {
        quests[i] = {
            id: options[i][0],
            quest: options[i][1],
            options: options[i].splice(2, options[i].length - 3),
            correctOptIndex: options[i][options[i].length-1]
        };
    }
    return quests;
}
function renderQuest() {
    var currQuest = gQuests[gQuestIndex];
    var strImgHTML = '<img src="img/' + currQuest.id + '" />\n';
    var strButtonHTML = '';
    var strQuestHTML = '<h2>' + currQuest.quest + '</h2>\n';
    for (var i = 0; i < currQuest.options.length; i++) {
        var currOp = currQuest.options[i]
        strButtonHTML += '<button id="' + i + '" onclick="isRight(this.id)">' + currOp + '</button>\n';
    }
    var elBox = document.querySelector('.box');
    elBox.innerHTML = strImgHTML+strQuestHTML+strButtonHTML;
    console.log(strImgHTML, strQuestHTML, strButtonHTML);
}
function isRight(elButtonId) {
    var currQuest = gQuests[gQuestIndex];
    console.log('you clicked on '+elButtonId+currQuest.correctOptIndex);
    if (currQuest.correctOptIndex == elButtonId&&!isWinner()) {
        console.log('you clicked on '+elButtonId);
        gQuestIndex++;
        renderQuest();
        return;
    }
}
function isWinner(){
    if (gQuestIndex<2)return false;
    if (gQuestIndex===2){
        var strHtml='<h1> congratulations you won the game </h1>\n'
        +'<button onclick="initGame()">play again?</button>'
        var elBox=document.querySelector('.box');
        elBox.innerHTML=strHtml;
    }
}