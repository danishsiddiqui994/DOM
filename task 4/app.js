const list = document.getElementById('list items');
const icons= document.querySelectorAll('#icons');
const feature= document.getElementById('feature');
const done=document.getElementById('ok');


function screen(){

let screenwidth=window.innerWidth;
if(
    screenwidth<750){
    list.style.display='none';
    feature.style.display='flex';
    // let id=[...icons]
    icons.forEach(function (chala){
    chala.style.display='none'   
} )

}
else {

    list.style.display='flex';
    feature.style.display='none';
    icons.forEach(function(chala)
    {
        chala.style.display='flex';
    }
    )
}}
window.addEventListener( 'resize',screen);