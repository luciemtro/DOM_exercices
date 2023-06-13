# The DOM Drill

Let's sum up everything we know about the DOM in a big recap exercise!

## Exercises

In the [index.html](./index.html) add a script tag to the end of the `<body>`. Then do the following exercises. 

**DO NOT MODIFY THE HTML FILE**, all the modifications should be done using javascript. Exercises that start with a **(*)** are harder to solve, you can keep this for the end.

- Use [childNodes](https://developer.mozilla.org/en-US/docs/Web/API/Node/childNodes) to list all the children from the `<ul>`
- Write a for loop to iterate over every child. In this loop:
  - Use a condition in the loop to only iterate over element nodes (see: [nodeType](https://developer.mozilla.org/en-US/docs/Web/API/Node/nodeType)s. Use `child.nodeType === 1`)
  - Find the element that contains `Fast and Furious`. If it's not the first element move it to the top of the list
  - Since `Fast and Furious` is the most important franchise ever, add a class `.important` to the element
  - Add an `eventListener` on every items of the list. If the item is clicked an [alert()](https://developer.mozilla.org/en-US/docs/Web/API/Window/alert) pops up to display the name of clicked element
  - Add a special condition to the previous function if the clicked item is `Fast and Furious` the `alert()` should display `The most important franchise ever, the story of DOM(inic) Toretto's family. It's not about car, it's about family.`
  - **(*)** Remove duplicates using [removeChild](https://developer.mozilla.org/en-US/docs/Web/API/Node/removeChild) (duplicates are items with the exact same `textContent`, [isEqualNode](https://developer.mozilla.org/en-US/docs/Web/API/Node/isEqualNode) might be useful). 
- **(*)** Add an `eventListener` on the document body, listening for `keyup`. When pressing the `r` key of the keyboard the list should get sorted in a random order, however `Fast and Furious` **should remain the first element** (most important franchise ever, remember?)
- **(*)** Modify the previous function so that when you press the letter `d` of your keyboard, the `Fast and Furious` element gets [cloned](https://developer.mozilla.org/en-US/docs/Web/API/Node/cloneNode)
- Create a new `<div>` before the list, using [createElement](https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement) and [insertBefore](https://developer.mozilla.org/en-US/docs/Web/API/Node/insertBefore)
- Using `createElement`, create a [`<select>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/select) into the previously created `<div>`, with two `<option>`s in it: "important franchises" and "normal franchises"
- Add an eventListener to the `<select>`, on `change`, if the option "important franchise" is chosen, only display items of the list that have the class `.important`. (hint: you can toggle visibility using `element.style.visibility = 'hidden'`)


![Dom's advice](../0.Resources/DOM-drill.gif)
