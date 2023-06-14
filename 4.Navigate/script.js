let listOl = document.querySelector('ol');
let lastchild = listOl.children[4];
let firstchild = listOl.children[0];
firstchild.prepend(lastchild);
//Tâche 2

const h2n2 = document.getElementsByTagName('h2')[1];
const h2n3 = document.getElementsByTagName('h2')[2];

const section2 = document.getElementsByTagName('section')[1];
const section3 = document.getElementsByTagName('section')[2];

section2.appendChild(h2n3)
section3.appendChild(h2n2)

section3.remove()








