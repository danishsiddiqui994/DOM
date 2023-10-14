const colors = ['red','green','blue','yellow','purple'];
var text = document.querySelector('span');

function colorHandler( ){

console.log('chal gaya');

let differentColors = Math.floor(Math.random()*colors.length);
text.textContent = colors[differentColors];
console.log(colors[differentColors]);
document.body.style.backgroundColor = colors[differentColors];
}