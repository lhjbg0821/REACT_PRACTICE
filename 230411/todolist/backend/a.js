const foods = [
  { type: "fruit", name: "apple" },
  { type: "vegetable", name: "carrot" },
  { type: "fruit", name: "banana" },
  { type: "vegetable", name: "tomato" },
  { type: "fruit", name: "kiwi" },
  { type: "vegetable", name: "potato" },
  { type: "fruit", name: "orange" },
];

const onlyFruits = foods.filter((v, i) => {
  return v.type === "fruit";
});

const mapFruits = foods.map((v, i) => {
  if (v.type === "fruit") {
    return v;
  }
});

console.log(onlyFruits);
console.log(mapFruits);
