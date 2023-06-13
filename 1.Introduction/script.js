const titleHead = document.getElementsByTagName('title').innerText = 'Modifying the DOM';
console.log(titleHead)

const body = document.body

const bodyChild = body.childNodes ;
for (i = 0 ; i < bodyChild.length ; i++){
    console.log(bodyChild[i])
}
body.style.background ='rgb(220, 80, 152)'
