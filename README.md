# perpage

Little library to do the simple maths of working out pagination.

```js
const perPage1 = new PerPage(1, 50); // current page, items per page
perPage1.total = 150;

console.log(perPage1.offset); // => 0
console.log(perPage1.toObject); // => { page: 1, next: 2 }

const perPage2 = new PerPage(2, 50); // current page, items per page
perPage2.total = 150;

console.log(perPage2.offset); // => 0
console.log(perPage2.toObject); // => { page: 2, previous: 1, next: 3 }
```
