const a = [
    {estrato: 1, vp: 30000},
    {estrato: 1, vp: 15000},
    {estrato: 3, vp: 25000},
]

const items = a.filter(item => item.estrato == 1);

const suma = items.reduce((a, b) => a + b.vp, 0);

console.log(items);
console.log(suma);