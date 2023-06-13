# Creating nodes

Now that we can acess the DOM and modify existing nodes, let's try to create new ones!

Using the [document.createElement()](https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement) method we can create any element node we'd like (`<p>`, `<section>`, `<div>`, ...).

We then need to create text node for the text inside the elements, using the [createTextNode](https://developer.mozilla.org/en-US/docs/Web/API/Document/createTextNode) method.

The trick is to append each node to its corresponding parent, using either the [appendChild](https://developer.mozilla.org/en-US/docs/Web/API/Node/appendChild) or [insertBefore](https://developer.mozilla.org/en-US/docs/Web/API/Node/insertBefore) method, that way you can position your newly created nodes in the DOM tree.

## Exercises

- Modify the [script.js](./script.js) to create a new `<section>` with a random background-color for each learners in your promo. This section should contain a paragraph with the name of the learner. Those sections should be appended in the `<article>`
- If the background is dark the text should be white, if the background is light the text should be black
- Find a way so that everytime you load the page the order of the elements changes!