const express = require('express');

const ProductsService = require('./../services/products.service');
const validatorHandler = require('./../middleware/validator.handler');
const {createProductSchema, updateProductSchema, getProductSchema} = require('./../schemas/product.schema');

const router = express.Router();
const service = new ProductsService();

//> GET ----------
router.get('/', async (req, res) => {
  const products = await service.find()
  res.json(products)
});

router.get('/:id',
  validatorHandler(getProductSchema, 'params'),
  async (req, res, next) => { //> se agrega el next
    try {
      const {id} = req.params;
      const product = await service.findOne(id);
      res.json(product);
    } catch(err) {
      next(err); //> se agrega el next para atrapar de forma explicita el error con el middleware
    }
  }
);

//> POST  ----------
router.post('/',
  validatorHandler(createProductSchema, 'boby'),
  async (req, res) => {
    const body = req.body;
    const newProduct = await service.create(body);
    res.status(201).json(newProduct);
  }
);

//> PATH  ----------
router.patch('/:id',
  validatorHandler(getProductSchema, 'params'),
  validatorHandler(updateProductSchema, 'boby'),
  async (req, res, next) => {
    try {
      const {id} = req.params;
      const body = req.body;
      const product = await service.update(id, body);
      res.json(product);
    } catch(err) {
      next(err)
    }
  }
);

//> DELETE  ----------
router.delete('/:id', async (req, res) => {
  const {id} = req.params;
  const rta = await service.delete(id)
  res.json(rta);
});

module.exports = router;