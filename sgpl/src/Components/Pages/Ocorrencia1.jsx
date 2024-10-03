import React, { useState, useEffect } from 'react';
import './vermelho.css'

const Ocorrencia = () => {
  const [descricao, setDescricao] = useState('');

  useEffect(() => {
    const savedDescricao = localStorage.getItem('descricao');
    if (savedDescricao) {
      setDescricao(savedDescricao);
      localStorage.removeItem('descricao');
    }
  }, []);

  const confirmarEnvio = () => {
    if (descricao.trim() === '') {
      alert('Por favor, preencha a descrição do problema.');
      return;
    }
    if (window.confirm('Tem certeza que deseja enviar?')) {
      // Aqui você pode enviar os dados, e.g., via API ou redirecionar
      console.log('Formulário enviado');
    }
  };

  const handleDescricaoChange = (event) => {
    setDescricao(event.target.value);
  };

  useEffect(() => {
    const handleBeforeUnload = () => {
      localStorage.setItem('descricao', descricao);
    };
    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [descricao]);

  return (
    <div className="container">
      <h1>OCORRÊNCIA</h1>
      <h2>Teclado quebrado #001</h2>
      <p className="rm-number">RM974568</p>

      <div className="details">
        <p><strong>RM Professor :</strong> 987604</p>
        <p><strong>Data :</strong> 09/09/2024 &nbsp;&nbsp;&nbsp; <strong>Período :</strong> Noturno</p>
        <p><strong>Laboratório :</strong> 1 &nbsp;&nbsp;&nbsp; <strong>Andar :</strong> 2 &nbsp;&nbsp;&nbsp; <strong>Máquina :</strong> 009675</p>
      </div>

      <div>
        <p className="descricao1"><strong>Descrição do problema:</strong></p>
        <p>Teclado ao início da aula foi encontrado com as teclas desmontadas e o cabo de conexão rompido.</p>
      </div>

      <div className="card9">
        <div className="problema">
          <p className="descricao2"><strong>Resolução do problema:</strong></p>
          <textarea
            name="descricao1"
            id="descricao1"
            rows="10"
            cols="160"
            value={descricao}
            onChange={handleDescricaoChange}
          ></textarea>
        </div>
      </div>

      <button type="button" className="btn-voltar" onClick={confirmarEnvio}>
        Enviar
      </button>
    </div>
  );
};

export default Ocorrencia;
