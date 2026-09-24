const produtos = [
  { id: 1, nome: "Notebook", preco: 3500, estoque: 5, ativo: true },
  { id: 2, nome: "Mouse", preco: 80, estoque: 0, ativo: true },
  { id: 3, nome: "Teclado", preco: 150, estoque: 10, ativo: false },
  { id: 4, nome: "Monitor", preco: 1200, estoque: 3, ativo: true }
];

const produtosFiltrados = produtos.filter(function(produto) {
  return produto.estoque > 0 && produto.preco > 100;
});
console.log("4. Estoque > 0 e Preço > 100:", produtosFiltrados);