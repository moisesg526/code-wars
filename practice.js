// Must Know JS Methods
// arrays => filter, reduce, forEach, includes, indexOF, map
// strings => split, join

const items = [
  { name: "Bike", price: 100 },
  { name: "Tv", price: 200 },
  { name: "Album", price: 10 },
  { name: "Book", price: 5 },
  { name: "Phone", price: 500 },
  { name: "Computer", price: 1000 },
  { name: "Keyboard", price: 25 },
];

// Filter  True or False
let filterItems = items.filter((item) => item.price >= 100);
console.log(filterItems);

// Map
let names = items.map((name) => name.name);
console.log(names);
