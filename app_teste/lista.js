var listElement = document.querySelector('#app ul');
var inpuElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');

var afazeres = JSON.parse(localStorage.getItem('list_afazer')) || [];

function renderAfazer() {
    listElement.innerHTML = '';

    for(afazer of afazeres){
        var afazerElement = document.createElement('li');
        var afazerText = document.createTextNode(afazer);

        var buttonExElement = document.createElement('button');
        
        var pos = afazeres.indexOf(afazer);
        buttonExElement.setAttribute('onclick', 'deleteAfazer(' + pos + ')');
         
        var buttonExText = document.createTextNode('Excluir');

        buttonExElement.appendChild(buttonExText);
        afazerElement.appendChild(afazerText);
        afazerElement.appendChild(buttonExElement);
        listElement.appendChild(afazerElement);
    }
}

renderAfazer();

function addAfazer(){
    var afazerText = inpuElement.value;

    afazeres.push(afazerText);
    inpuElement.value = '';
    renderAfazer();
    saveToStorage()
}

function deleteAfazer(pos) {
    afazeres.splice(pos, 1);

    renderAfazer();
    saveToStorage()
}

function saveToStorage() {

    localStorage.setItem('list_afazer', JSON.stringify(afazeres));
}