import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Historico1.css';

const Historico1 = () => {
    const [descricao2, setDescricao] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const savedDescricao = localStorage.getItem('descricao3');
        if (savedDescricao) {
            setDescricao(savedDescricao);
            localStorage.removeItem('descricao3');
        }
    }, []);

    const confirmarEnvio = () => {
        if (descricao2.trim() === '') { 
            alert('Por favor, preencha a descrição do problema.');
            return;
        }
        if (window.confirm('Tem certeza que deseja enviar?')) {
            navigate('/devolucoes');
        }
    };

    useEffect(() => {
        const handleBeforeUnload = () => {
            localStorage.setItem('descricao3', descricao2); 
        };
        window.addEventListener('beforeunload', handleBeforeUnload);
        return () => {
            window.removeEventListener('beforeunload', handleBeforeUnload);
        };
    }, [descricao2]);

    return (
        <>
            <div className="historico-ocorrencia">
                <h1>OCORRÊNCIA</h1>
                <h2>Falha no compartilhamento de tela #003</h2>
                <p className="historico-registro">RM974568</p>
                <div className="historico-detalhes">
                    <p><strong>RM Professor :</strong> 987604</p>
                    <p><strong>Data :</strong> 10/09/2024 &nbsp;&nbsp;&nbsp; <strong>Período :</strong> Noturno</p>
                    <p><strong>Laboratório :</strong> 1 &nbsp;&nbsp;&nbsp; <strong>Andar :</strong> 2 &nbsp;&nbsp;&nbsp; <strong>Máquina :</strong> 009675</p>
                </div>
                <div>
                    <p className="historico-descricao"><strong>Descrição do problema:</strong></p>
                    <p>Não foi possível compartilhar a tela com os alunos.</p>
                </div>
            </div>
            
            <div className="historico-resolucao">
                <p className="historico-descricao"><strong>Resolução do problema:</strong></p>
                <textarea 
                    rows="10" 
                    cols="160" 
                    value={descricao2} 
                    onChange={(e) => setDescricao(e.target.value)}
                />
            </div>
            
            <form action="/devolucoes" method="get" className="historico-form">
                <button type="button" className="historico-botao-enviar" onClick={confirmarEnvio}>Enviar</button>
            </form>
        </>
    );
};

export default Historico1;

