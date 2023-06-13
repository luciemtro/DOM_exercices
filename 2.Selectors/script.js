let important = document.getElementsByClassName('important');
let paragraphe = document.querySelectorAll('p');
for (items of important){
    items.title = 'This is an important item';
}

let images = document.querySelectorAll('img');

for (picture of images){
    if(picture.className != 'important'){
        picture.style.display = 'none';
    }
}

for (contenu of paragraphe){
    console.log(contenu.innerText);
    console.log(contenu.className);
    let colorR = Math.floor(Math.random()*256);
    let colorG = Math.floor(Math.random()*256);
    let colorB = Math.floor(Math.random()*256);
    if (contenu.className == ''){
    contenu.style.color = 'rgb(' + colorR + ',' + colorG + ',' + colorB + ')'}
}




