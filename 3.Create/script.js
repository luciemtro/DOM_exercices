const sect = document.createElement('section');
const article = document.getElementsByTagName('article')[0];
let names = ["Julien","Adeline","Bathsheba","Camille","Cedric","Clara","Corentin","Ilias","Jason","Jérôme","Lucie","Manon","Marius","Nathan","Nicolas","Ozlem","Pauline","Pietro","Robin","Rui","Sam","Sarah","Steeve","Tim","Youssef"];
let newNames = []

for (element of names){
    let aleatoire = Math.ceil(Math.random()*names.length)
    newNames.push(names[aleatoire]);
}


for (apprenant of newNames){
    const paragraphe = document.createElement('p');
    const textparagraphe = document.createTextNode(apprenant); 
    let colorR = Math.floor(Math.random()*256);
    let colorG = Math.floor(Math.random()*256);
    let colorB = Math.floor(Math.random()*256);
    paragraphe.appendChild(textparagraphe);
    paragraphe.style.background = 'rgb(' + colorR + ',' + colorG + ',' + colorB + ')'
    let lum = ((colorR*299)+(colorG*587)+(colorB*114))/1000;
    if (lum < 125){
        paragraphe.style.color = 'white';
    }
    else{
        paragraphe.style.color = 'black';
    }
    sect.appendChild(paragraphe);
    article.appendChild(sect);
}














