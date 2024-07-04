const categoriesRef = document.querySelector('#categories');


const liItemRef = document.querySelectorAll('.item');
console.log(`Numbers of categories: ${liItemRef.length}`);



liItemRef.forEach(item => {
const itemTitle = item.querySelector('h2').textContent;

const categoriesLi = item.querySelectorAll('ul li');

console.log(`Category:${itemTitle}`);
console.log(`Elements:${categoriesLi.length}`);
});

