import React from 'react';
import './Historico.css';


const Historico = () => {
  return (
    <div>
      <h1 className="historico">HISTÓRICO</h1>
      {[
        { date: "10/09/2024", description: "Falha no compartilhamento de tela", link: "./Historico1", color: "vermelho" },
        { date: "11/09/2024", description: "Erro no VS Code", link: "./Historico2", color: "amarelo" },
        { date: "09/09/2024", description: "Teclado quebrado", link: "./Historico3", color: "verde" },
      ].map((item, index) => (
        <div key={index} className={`card ${item.color}`}>
          <p><a href={item.link}>{item.date} - {item.description}</a></p>
        </div>
      ))}
    </div>
  );
};

export default Historico;
