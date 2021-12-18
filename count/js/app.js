window.onload = function(){

function count_f() {
let textField = document.getElementById('text').value;

//let nRegex = /\(н\)/gi;
let n = (textField.match(/\(н\)/gi)||[]).length;
let np = (textField.match(/\(нп\)/gi)||[]).length;
result = "н "+(n+(np/2));
let p = (textField.match(/\(р\)/gi)||[]).length;
let pp = (textField.match(/\(рп\)/gi)||[]).length;
result1 = "р "+(p+(pp/2));
let v = (textField.match(/\(в\)/gi)||[]).length;
let vp = (textField.match(/\(вп\)/gi)||[]).length;
result2 = "в "+(v+(vp/2));
document.getElementById('score').innerHTML = (result1 +"</br> "+ result+"</br> "+ result2);


}
x = document.getElementById('start');
x.onclick = count_f;

}