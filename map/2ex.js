const produtos = [
  { id: 1, nome: "Notebook", preco: 3500, estoque: 5, ativo: true },
  { id: 2, nome: "Mouse", preco: 80, estoque: 0, ativo: true },
  { id: 3, nome: "Teclado", preco: 150, estoque: 10, ativo: false },
  { id: 4, nome: "Monitor", preco: 1200, estoque: 3, ativo: true }
];

const produtosComDesconto = produtos.map(function(produto) {
  return {
    id: produto.id,
    nome: produto.nome,
    preco: produto.preco * 0.9,
    estoque: produto.estoque,
    ativo: produto.ativo
  };
});
console.log("2. Produtos com 10% Desconto:", produtosComDesconto);