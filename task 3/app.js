const people =
[
   // img:'<img src="https://image.shutterstock.com/image-photo/portrait-handsome-caucasian-man-formal-260nw-2142820441.jpg" jsaction="VQAsE" class="sFlh5c pT0Scc iPVvYb" style="max-width: 390px; height: 280px; margin: 0px; width: 390px;" alt="3748 Free CC0 Man Stock Photos - StockSnap.io" jsname="kn3ccd" aria-hidden="false">',


{

   name:'oliver',
   designation:'business man',
   description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus dolores delectus magnam possimus hic odit quasi sunt cupiditate temporibus commodi at, molestias molestiae ad nobis. Illum in voluptatibus ipsam atque',
   img:'image1.jpg',

},
{

    name:'thomas',
    designation:'production manager',
    description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus dolores delectus magnam possimus hic odit quasi sunt cupiditate temporibus commodi at, molestias molestiae ad nobis. Illum in voluptatibus ipsam atque',
    img:'<img src="https://media.istockphoto.com/id/1372138855/photo/cheerful-black-manager-with-digital-tablet-walking-by-office.jpg?s=612x612&amp;w=0&amp;k=20&amp;c=PU58BwF0lhQwDqhmIKHHg_i2qYUqypZGLxXiwGFjIxQ=" jsaction="VQAsE" class="sFlh5c pT0Scc iPVvYb" style="max-width: 612px; height: 278px; margin: 0px; width: 417px;" alt="466,900+ Black Business Man Stock Photos, Pictures &amp; Royalty-Free Images -  iStock | Black business man portrait, Young black business man, Black  business man on phone" jsname="kn3ccd" aria-hidden="false"',
 },
 {

    name:'william',
    designation:'developer',
    description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus dolores delectus magnam possimus hic odit quasi sunt cupiditate temporibus commodi at, molestias molestiae ad nobis. Illum in voluptatibus ipsam atque',
    img:'<img src="https://t4.ftcdn.net/jpg/03/05/46/75/360_F_305467506_QczGkOYLChAeFpjsLrzFltFXwxunx0xE.jpg" jsaction="VQAsE" class="sFlh5c pT0Scc iPVvYb" style="max-width: 450px; height: 360px; margin: 0px; width: 450px;" alt="programer, coding, best programming languages, flat illustration concept  Stock Illustration | Adobe Stock" jsname="kn3ccd" aria-hidden="false">'
 },
 {

    name:'daniel',
    designation:'teacher man',
    description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus dolores delectus magnam possimus hic odit quasi sunt cupiditate temporibus commodi at, molestias molestiae ad nobis. Illum in voluptatibus ipsam atque',
    img:'<img src="https://image.shutterstock.com/image-photo/portrait-handsome-caucasian-man-formal-260nw-2142820441.jpg" jsaction="VQAsE" class="sFlh5c pT0Scc iPVvYb" style="max-width: 390px; height: 280px; margin: 0px; width: 390px;" alt="3748 Free CC0 Man Stock Photos - StockSnap.io" jsname="kn3ccd" aria-hidden="false">',
 
 },

];

const personName= document.getElementById('name');
const personDesignation= document.getElementById('designation');
const personDescription= document.getElementById('description');
const personImg= document.getElementById('img');


let userItems=0;
console.log(userItems);

function setUser ( ) {

   personName.textContent=people[userItems].name;
   personDesignation.textContent=people[userItems].designation;
   personDescription.textContent=people[userItems].description;
   personImg.src=people[userItems].img;
   
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



