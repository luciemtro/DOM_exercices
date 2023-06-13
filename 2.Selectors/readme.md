# DOM Selectors

You can access any elements from the DOM using the `querySelector` and `querySelectorAll` methods.

- `querySelector` returns the first element that matches the selector
- `querySelectorAll` returns a list of elements that matches the selector

## Examples 

```html
<p>
  This is a <a href="homepage.html">link</a>, this is <a href="contact.html" id="bold">another link</a>.
</p>
```

```javascript
const qS = document.querySelector('a')
console.log(qS.href) // "homepage.html"
console.log(qS.innerText) // "link"

const qSA = document.querySelectorAll('a')
console.log(qSA) // [ ... ]
console.log(qSA[0].innerText) // "link"
console.log(qSA[1].id) // "bold"
```

Javascript query-selectors works like css selectors, if you want to select any `<a>` tag with a the id `bold` just use :
```javascript
const qS = document.querySelector('a#bold')
console.log(qS.innerText) // "another link"

```

## Exercises

Without modifying the [index.html](./index.html) file open the [script.js](./script.js) to do the following tasks:
- Add a `title` attribute to every element that has the important class, stating `This is an important item`
- Select all the imgs tags and loop through them. If they have no `important` class, turn their [display property](https://developer.mozilla.org/en-US/docs/Web/CSS/display) to `none`
- Loop through all the paragraphs and display their content in the console. If the paragraph has a class, display its classname has well
- Give each of the paragraph a random text color (different for each one) UNLESS it has a class then leave it as it is.