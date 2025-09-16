// src/scripts/populateProducts.js
const connection = require('../models/connection'); // sua conexão MySQL
const products = require('../data/db.json').products; // produtos do JSON

const populateProducts = async () => {
  try {
    for (const product of products) {
      const { name, image, price, originalPrice, installmentPrice, maxInstallments, rating } = product;

      // Evitar duplicados: checa se já existe produto com o mesmo name
      const [existing] = await connection.execute(
        'SELECT id FROM products WHERE name = ?',
        [name]
      );

      if (existing.length === 0) {
        await connection.execute(
          `INSERT INTO products 
          (name, image, price, originalPrice, installmentPrice, maxInstallments, rating)
          VALUES (?, ?, ?, ?, ?, ?, ?)`,
          [name, image, price, originalPrice, installmentPrice, maxInstallments, rating]
        );
        console.log(`Produto "${name}" inserido`);
      } else {
        console.log(`Produto "${name}" já existe, pulando...`);
      }
    }
    console.log('✅ Todos os produtos foram populados!');
    process.exit(0);
  } catch (err) {
    console.error('❌ Erro ao popular produtos:', err);
    process.exit(1);
  }
};

populateProducts();
