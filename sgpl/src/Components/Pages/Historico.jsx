import React from 'react';
import './Historico.css';
import logo from './logo.png';

const Historico = () => {
  return (
    <div>
      <h1>HISTÓRICO</h1>
      {[
        { date: "09/09/2024", description: "Teclado quebrado", link: "0001.html", color: "verde" },
        { date: "09/09/2024", description: "Falha na conexão à internet", link: "0002.html", color: "verde" },
        { date: "10/09/2024", description: "Falha no compartilhamento de tela", link: "0003.html", color: "vermelho" },
        { date: "11/09/2024", description: "Erro no VS Code", link: "0004.html", color: "amarelo" },
        { date: "11/09/2024", description: "Problemas com autenticação", link: "0005.html", color: "vermelho" },
        { date: "11/09/2024", description: "Mouse não funciona", link: "0006.html", color: "verde" },
        { date: "12/09/2024", description: "Problemas com a fonte de alimentação", link: "0007.html", color: "vermelho" },
        { date: "12/09/2024", description: "Teclado quebrado", link: "0008.html", color: "verde" },
      ].map((item, index) => (
        <div key={index} className={`card ${item.color}`}>
          <p><a href={item.link}>{item.date} - {item.description}</a></p>
        </div>
      ))}
    </div>
  );
};

export default Historico;
