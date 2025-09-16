const productsModel = require('../models/productsModel');
const productsData = require('../data/db.json'); // JSON do backend
const products = productsData.products;

// GET /products
const getAll = async (_req, res) => {
  try {
    const products = await productsModel.getAll(); 
    return res.status(200).json(products);
  } catch (error) {
    return res.status(500).json({ message: 'Erro ao buscar produtos', error });
  }
};

// POST /products
const createProduct = async (req, res) => {
  try {
    const createdProduct = await productsModel.createProduct(req.body);
    return res.status(201).json({ id: createdProduct.insertId, ...req.body });
  } catch (error) {
    return res.status(500).json({ message: 'Erro ao criar produto', error });
  }
};

// PUT /products/:id
const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    await productsModel.updateProduct(id, req.body);
    return res.status(200).json({ id, ...req.body });
  } catch (error) {
    return res.status(500).json({ message: 'Erro ao atualizar produto', error });
  }
};

// DELETE /products/:id
const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    await productsModel.deleteProduct(id);
    return res.status(204).json();
  } catch (error) {
    return res.status(500).json({ message: 'Erro ao deletar produto', error });
  }
};

// POST /populate-products → popula produtos do JSON no banco
const populateProductsFromJSON = async (_req, res) => {
  try {
    for (const product of products) {
      await productsModel.createProduct(product);
    }
    return res.status(200).json({ message: 'Produtos populados com sucesso!' });
  } catch (error) {
    return res.status(500).json({ message: 'Erro ao popular produtos', error });
  }
};

module.exports = {
  getAll,
  createProduct,
  updateProduct,
  deleteProduct,
  populateProductsFromJSON
};
