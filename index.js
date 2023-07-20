const pizzas = [
  {
    id: 1,
    nombre: "pizza de Muzzarella",
    precio: 500,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
  },

  {
    id: 2,
    nombre: "pizza de Cebolla",
    precio: 1500,
    ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
  },

  {
    id: 3,
    nombre: "pizza Napolitana",
    precio: 1350,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas"],
  },

  {
    id: 4,
    nombre: "pizza 4 Quesos",
    precio: 1380,
    ingredientes: [
      "Muzzarella",
      "Tomate",
      "Queso Azul",
      "Parmesano",
      "Roquefort",
    ],
  },

  {
    id: 5,
    nombre: "pizza Especial",
    precio: 1000,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas", "Cebolla"],
  },

  {
    id: 6,
    nombre: "pizza con Anana",
    precio: 600,
    ingredientes: ["Muzzarella", "Tomate", "Anana"],
  },
];

// a. Imprimir pizzas con ID IMPAR.

const pizzaswithoddID = pizzas.filter ((pizza) => pizza.id % 2 !== 0);
console.log("Las pizzas con ID IMPAR son:");
pizzaswithoddID.forEach ((pizza) => {
  console.log(`·${pizza.nombre}, y su id es ${pizza.id}`);
});

//b. Responde a la pregunta, ¿hay alguna pizza que valga menos de $600?.

const lessthan600 = pizzas.some ((pizza) => pizza.precio < 600);
console.log (
`¿Hay alguna pizza que tenga un valor menor a $600? ${lessthan600 ? "Tenemos" : "No tenemos"}`
);

//c. Imprimir el nombre de cada pizza con su respectivo precio.

console.log ("Estos son los nombres y los precios de las pizzas que tenemos");
pizzas.forEach ((pizza) => console.log(`${pizza.nombre}: ${pizza.precio}`));