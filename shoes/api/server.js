const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3000; // Você pode mudar a porta se quiser

app.use(cors());

// 🔥 Lista dos produtos existentes no site:
const produtos = [
  {
    id: 1,
    nome: "Sandália Infantil Barbie",
    preco: "R$59,90",
    imagem: "img/product/p1.jpg"
  },
  {
    id: 2,
    nome: "Tênis Infantil Ludique x Minecraft",
    preco: "R$149,90",
    imagem: "img/product/p2.jpg"
  },
  {
    id: 3,
    nome: "Tênis Infantil Homem-Aranha",
    preco: "R$239,90",
    imagem: "img/product/p3.jpg"
  },
  {
    id: 4,
    nome: "Roblox kids star modelo novo",
    preco: "R$55,90",
    imagem: "img/product/p4.jpg"
  },
  {
    id: 5,
    nome: "Sapatilha My Little Pony Fluttershy",
    preco: "R$43,90",
    imagem: "img/product/p5.jpg"
  },
  {
    id: 6,
    nome: "Sandália crocs shrek classic",
    preco: "R$210,00",
    imagem: "img/product/p6.jpg"
  },
  {
    id: 7,
    nome: "Sapato Led Infantil Sonic Personagem",
    preco: "R$69,90",
    imagem: "img/product/p7.jpg"
  },
  {
    id: 8,
    nome: "Tênis Luccas Neto Neoprene Verde",
    preco: "R$49,99",
    imagem: "img/product/p8.jpg"
  },
  {
    id: 9,
    nome: "Omnitrix Turbo - Tênis Infantil Ben 10",
    preco: "R$139,90",
    imagem: "img/product/p9.jpg"
  },
  {
    id: 10,
    nome: "Paris Style by Ladybug - Tênis Kid Fashion",
    preco: "R$129,90",
    imagem: "img/product/p10.jpg"
  },
  {
    id: 11,
    nome: "Rasengan Speed - Tênis Infantil Naruto Ninja",
    preco: "R$159,90",
    imagem: "img/product/p11.jpg"
  },
  {
    id: 12,
    nome: "Pikachu Glow - Sapato Infantil Pokémon",
    preco: "R$109,90",
    imagem: "img/product/p12.jpg"
  },
  {
    id: 13,
    nome: "Lua Nova Twilight - Chinelo Crepúsculo Teen",
    preco: "R$49,90",
    imagem: "img/product/p13.jpg"
  },
  {
    id: 14,
    nome: "Doce Encanto Garden - Sapatilha Moranguinho Baby",
    preco: "R$69,90",
    imagem: "img/product/p14.jpg"
  },
  {
    id: 15,
    nome: "Victory Royale Power - Meia Fortnite Gamer",
    preco: "R$29,90",
    imagem: "img/product/p15.jpg"
  },
  {
    id: 16,
    nome: "Supercell Strike - Chinelo Infantil Brawl Stars",
    preco: "R$44,90",
    imagem: "img/product/p16.jpg"
  }
];

// 🔥 Endpoint que retorna todos os produtos
app.get('/api/produtos', (req, res) => {
  res.json(produtos);
});

// 🚀 Rodando a API
app.listen(PORT, () => {
  console.log(`🚀 API rodando em: http://localhost:${PORT}/api/produtos`);
});
