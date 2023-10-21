const people =
[
   // img:'<img src="https://image.shutterstock.com/image-photo/portrait-handsome-caucasian-man-formal-260nw-2142820441.jpg" jsaction="VQAsE" class="sFlh5c pT0Scc iPVvYb" style="max-width: 390px; height: 280px; margin: 0px; width: 390px;" alt="3748 Free CC0 Man Stock Photos - StockSnap.io" jsname="kn3ccd" aria-hidden="false">',


{

   name:'oliver',
   designation:'business man',
   description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus dolores delectus magnam possimus hic odit quasi sunt cupiditate temporibus commodi at, molestias molestiae ad nobis. Illum in voluptatibus ipsam atque',
   image:'./assets/image1.jpg',

},
{

    name:'thomas',
    designation:'production manager',
    description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus dolores delectus magnam possimus hic odit quasi sunt cupiditate temporibus commodi at, molestias molestiae ad nobis. Illum in voluptatibus ipsam atque',
    image:'./assets/image2.jpg'
 },
 {

    name:'william',
    designation:'developer',
    description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus dolores delectus magnam possimus hic odit quasi sunt cupiditate temporibus commodi at, molestias molestiae ad nobis. Illum in voluptatibus ipsam atque',
    image:'./assets/image3.jpg'
 },
 {

    name:'daniel',
    designation:'teacher man',
    description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus dolores delectus magnam possimus hic odit quasi sunt cupiditate temporibus commodi at, molestias molestiae ad nobis. Illum in voluptatibus ipsam atque',
    image:'./assets/image4.jpg'
 
 },

];

const personName= document.getElementById('name');
const personDesignation= document.getElementById('designation');
const personDescription= document.getElementById('description');
const personImg= document.getElementById('image');


let userItems=0;
console.log(userItems);

function setUser ( ) {

   personName.textContent=people[userItems].name;
   personDesignation.textContent=people[userItems].designation;
   personDescription.textContent=people[userItems].description;
   personImg.src=people[userItems].image;
   
}

setUser();

function forward(){

   userItems++;
   if(userItems>=people.length)
   {

      userItems=0;

   }
setUser();
}

function backward(){

   userItems--;
   if( userItems<0){

      userItems=people.length-1;
   }
   setUser();
}



