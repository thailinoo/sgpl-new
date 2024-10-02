import React from 'react';
import './Devolucoes.css';


const Devolucoes = () => {
  return (
    <div>
      <h1>DEVOLUÇÕES</h1>
      {[
        { date: "10/09/2024", description: "Falha no compartilhamento de tela", link: "0003.html", color: "vermelho" },
        { date: "11/09/2024", description: "Erro no VS Code", link: "0004.html", color: "amarelo" },
        { date: "09/09/2024", description: "Teclado quebrado", link: "0001.jsx", color: "verde" },
    
      ].map((item, index) => (
        <div key={index} className={`card3 ${item.color}`}>
          <p><a href={item.link}>{item.date} - {item.description}</a></p>
        </div>
      ))}
    </div>
  );
};

export default Devolucoes
