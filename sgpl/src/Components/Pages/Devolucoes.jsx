import React from 'react';
import { Link } from 'react-router-dom'; // Importe o Link
import './Devolucoes.css';

const Devolucoes = () => {
  return (
    <div>
      <h1>DEVOLUÇÕES</h1>
      {[
        { date: "10/09/2024", description: "Falha no compartilhamento de tela", link: "/Devolucao3", color: "vermelho" },
        { date: "11/09/2024", description: "Erro no VS Code", link: "/Devolucao2", color: "amarelo" },
        { date: "09/09/2024", description: "Teclado quebrado", link: "/Devolucao1", color: "verde" },
      ].map((item, index) => (
        <div key={index} className={`card3 ${item.color}`}>
          <p>
            <Link to={item.link}>{item.date} - {item.description}</Link>
          </p>
        </div>
      ))}
    </div>
  );
};

export default Devolucoes;
