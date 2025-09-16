const { db } = require("./firebase");

console.log("=== ESCUTANDO CLIENTES EM TEMPO REAL ===\n");

const customersRef = db.collection("orders");

customersRef.onSnapshot(snapshot => {
  console.clear(); // Limpa o terminal para mostrar apenas os dados mais recentes
  console.log("=== CLIENTE ATUALIZADO DADOS DO CLIENTES ===\n");

  if (snapshot.empty) {
    console.log("Nenhum cliente encontrado.\n");
    return;
  }

  snapshot.docs.forEach((doc, index) => {
    const customer = doc.data();
    console.log(`Cliente ${index + 1}`);
    console.log(`ID: ${doc.id}`);
    console.log(`Nome: ${customer.nome}`);
    console.log(`Telefone: ${customer.telefone}`);
    console.log(`Endereço: ${customer.endereco}, Nº ${customer.numero}, ${customer.bairro}, ${customer.cidade} - ${customer.estado}`);
    console.log(`CEP: ${customer.cep}`);
    console.log("Produtos:");

    if (customer.produtos && customer.produtos.length > 0) {
      customer.produtos.forEach((produto, i) => {
        console.log(`  ${i + 1}. ${produto.name} | Quantidade: ${produto.quantity} | Preço: R$${produto.price}`);
      });
    } else {
      console.log("  Nenhum produto registrado.");
    }

    console.log(`Total do pedido: R$${customer.total}\n`);
    console.log("--------------------------------------------------\n");
  });
});