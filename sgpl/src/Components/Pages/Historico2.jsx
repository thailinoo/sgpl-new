import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Historico2.css';

const Historico2 = () => {
    const [descricao, setDescricao] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const savedDescricao = localStorage.getItem('descricao4');
        if (savedDescricao) {
            setDescricao(savedDescricao);
            localStorage.removeItem('descricao4');
        }
    }, []);

    const confirmarEnvio = () => {
        if (descricao.trim() === '') {
            alert('Por favor, preencha a descrição do problema.');
            return;
        }
        if (window.confirm('Tem certeza que deseja enviar?')) {
            navigate('/devolucoes');
        }
    };

    useEffect(() => {
        const handleBeforeUnload = () => {
            localStorage.setItem('descricao4', descricao);
        };
        window.addEventListener('beforeunload', handleBeforeUnload);
        return () => {
            window.removeEventListener('beforeunload', handleBeforeUnload);
        };
    }, [descricao]);

    return (
        <>
            <div className="ocorrencia-container">
                <h1>OCORRÊNCIA</h1>
                <h2>Erro no VS Code #004</h2>
                <p className="rm-number">RM996045</p>
                <div className="details">
                    <p><strong>RM Professor :</strong> 904536</p>
                    <p><strong>Data :</strong> 11/09/2024 &nbsp;&nbsp;&nbsp; <strong>Período :</strong> Matutino</p>
                    <p><strong>Laboratório :</strong> 2 &nbsp;&nbsp;&nbsp; <strong>Andar :</strong> 4 &nbsp;&nbsp;&nbsp; <strong>Máquina :</strong> 42196</p>
                </div>
                <div>
                    <p className="descricao2"><strong>Descrição do problema:</strong></p>
                    <p>O aluno não conseguiu abrir o VS Code.</p>
                </div>
            </div>

            <div className="resolucao-container">
                <p className="descricao2"><strong>Resolução do problema:</strong></p>
                <textarea 
                    rows="10" 
                    value={descricao} 
                    onChange={(e) => setDescricao(e.target.value)}
                />
            </div>

            <form className="ocorrencia-form">
                <div className="button-container">
                    <button type="button" className="btn-voltar" onClick={confirmarEnvio}>Enviar</button>
                </div>
            </form>
        </>
    );
};

export default Historico2

