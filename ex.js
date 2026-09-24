const usuarios = [
  { id: 1, nome: "Ana Silva", idade: 22, ativo: true, cargo: "Desenvolvedora" },
  { id: 2, nome: "Bruno Costa", idade: 17, ativo: true, cargo: "Estagiário" },
  { id: 3, nome: "Carlos Souza", idade: 30, ativo: false, cargo: "Designer" },
  { id: 4, nome: "Diana Lima", idade: 25, ativo: true, cargo: "Tech Lead" }
];

// 1. listarUsuarios()[cite: 1]
function listarUsuarios() {
  return usuarios.map(function(usuario) {
    return {
      nome: usuario.nome,
      cargo: usuario.cargo
    };
  });
}

// 2. buscarUsuarioPorId(id)[cite: 1]
function buscarUsuarioPorId(id) {
  return usuarios.find(function(usuario) {
    return usuario.id === id;
  });
}

// 3. listarUsuariosAtivos()[cite: 1]
function listarUsuariosAtivos() {
  return usuarios.filter(function(usuario) {
    return usuario.ativo === true;
  });
}

// 4. existeUsuarioInativo()[cite: 1]
function existeUsuarioInativo() {
  return usuarios.some(function(usuario) {
    return usuario.ativo === false;
  });
}

// 5. todosUsuariosMaioresDeIdade()[cite: 1]
function todosUsuariosMaioresDeIdade() {
  return usuarios.every(function(usuario) {
    return usuario.idade >= 18;
  });
}

// 6. calcularMediaIdade()[cite: 1]
function calcularMediaIdade() {
  const somaIdades = usuarios.reduce(function(acumulador, usuario) {
    return acumulador + usuario.idade;
  }, 0);
  return somaIdades / usuarios.length;
}

console.log("\n--- DESAFIO FINAL ---");
console.log("Lista resumida:", listarUsuarios());[cite= 1]
console.log("Buscar ID 2:", buscarUsuarioPorId(2));[cite= 1]
console.log("Ativos:", listarUsuariosAtivos());[cite= 1]
console.log("Há inativos?", existeUsuarioInativo());[cite= 1]
console.log("Todos maiores de idade?", todosUsuariosMaioresDeIdade());[cite=1]
console.log("Média de idade:", calcularMediaIdade());[cite= 1]