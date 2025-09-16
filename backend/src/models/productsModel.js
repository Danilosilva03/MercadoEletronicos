const connection = require('./connection'); // seu arquivo de conexão com MySQL

// Retornar todos os produtos
const getAll = async () => {
  const [products] = await connection.execute('SELECT * FROM products');
  return products;
};

// Criar novo produto
const createProduct = async (product) => {
  const { name, image, price, originalPrice, installmentPrice, maxInstallments, rating } = product;
  const query = `
    INSERT INTO products 
    (name, image, price, originalPrice, installmentPrice, maxInstallments, rating)
    VALUES (?, ?, ?, ?, ?, ?, ?)
  `;
  const [result] = await connection.execute(query, [name, image, price, originalPrice, installmentPrice, maxInstallments, rating]);
  return { insertId: result.insertId };
};

// Atualizar produto
const updateProduct = async (id, product) => {
  const { name, image, price, originalPrice, installmentPrice, maxInstallments, rating } = product;
  const query = `
    UPDATE products 
    SET name = ?, image = ?, price = ?, originalPrice = ?, installmentPrice = ?, maxInstallments = ?, rating = ?
    WHERE id = ?
  `;
  const [result] = await connection.execute(query, [name, image, price, originalPrice, installmentPrice, maxInstallments, rating, id]);
  return result;
};

// Deletar produto
const deleteProduct = async (id) => {
  const [result] = await connection.execute('DELETE FROM products WHERE id = ?', [id]);
  return result;
};

module.exports = {
  getAll,
  createProduct,
  updateProduct,
  deleteProduct,
};
