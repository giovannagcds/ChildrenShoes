const API_URL = "http://localhost:3000/produtos";

async function carregarProdutos() {
  const resposta = await fetch(API_URL);
  const produtos = await resposta.json();
  const secao = document.getElementById("produtos");
  const container = secao.querySelector(".row");
  container.innerHTML = "";

  produtos.forEach(produto => {
    const html = `
      <div class="col-lg-3 col-md-6 single-product-container">
        <div class="single-product">
          <img class="img-fluid" src="${produto.imagem}" alt="">
          <div class="product-details">
            <h6>${produto.nome}</h6>
            <div class="price">
              <h6>R$${produto.preco.toFixed(2)}</h6>
              <h6 class="l-through">R$${produto.preco_antigo.toFixed(2)}</h6>
            </div>
            <div class="prd-bottom">
              <a href="#" class="social-info"><span class="ti-bag"></span><p class="hover-text">Adicionar</p></a>
              <a href="#" class="social-info"><span class="lnr lnr-heart"></span><p class="hover-text">Wishlist</p></a>
            </div>
          </div>
        </div>
      </div>`;
    container.insertAdjacentHTML("beforeend", html);
  });
}

// ✅ Insira aqui as funções para POST, PUT e DELETE:

async function adicionarProduto(produto) {
  await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(produto)
  });
}

async function atualizarProduto(id, produto) {
  await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(produto)
  });
}

async function deletarProduto(id) {
  await fetch(`${API_URL}/${id}`, { method: "DELETE" });
}

document.addEventListener("DOMContentLoaded", () => {
  document.querySelector(".centralizado button").addEventListener("click", () => {
    document.getElementById("produtos").style.display = "block";
    carregarProdutos();
  });
});
