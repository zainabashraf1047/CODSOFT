let currentElement='';
function append(value){
    currentElement+=value;
    document.getElementById('answer').value=currentElement;
}
function clearDisplay(){
currentElement='';
document.getElementById('answer').value='';
}
function clearEntry(){
    currentElement=currentElement.slice(0,-1);
    document.getElementById('answer').value=currentElement;
}