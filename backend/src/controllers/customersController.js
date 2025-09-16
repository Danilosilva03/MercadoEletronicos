// controllers/customersController.js
const { db } = require("../firebase");

// Buscar todos os clientes/pedidos
const getCustomers = async (_req, res) => {
  try {
    const snapshot = await db.collection("orders").get();
    const customers = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    return res.status(200).json(customers);
  } catch (error) {
    return res.status(500).json({ message: "Erro ao buscar clientes", error });
  }
};

module.exports = { getCustomers };