const express = require('express');
const app = express();

const products = [
  {
    id: 1,
    name: 'Milk',
    price: 2.99,
    description: 'Whole milk',
  },
  {
    id: 2,
    name: 'Eggs',
    price: 1.99,
    description: 'Large eggs',
  },
  {
    id: 3,
    name: 'Bread',
    price: 2.49,
    description: 'Whole wheat bread',
  },
];

app.get('/api/products', (req, res) => {
  res.status(200).json(products);
});

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`API server listening on port ${port}`);
});
