import React, { useEffect, useState } from 'react';
import './Historico3.css'; // Certifique-se de que o caminho esteja correto

const Historico3 = () => {
    const [descricao, setDescricao] = useState('');

    useEffect(() => {
        const savedDescricao = localStorage.getItem('descricao1');
        if (savedDescricao) {
            setDescricao(savedDescricao);
            localStorage.removeItem('descricao1');
        }
    }, []);

    const confirmarEnvio = () => {
        if (descricao.trim() === '') {
            alert('Por favor, preencha a descrição do problema.');
            return;
        }
        if (window.confirm('Tem certeza que deseja enviar?')) {
            // Redirecionar para a página de devoluções
            window.location.href = '/devolucoes';
        }
    };

    useEffect(() => {
        const handleBeforeUnload = () => {
            localStorage.setItem('descricao1', descricao);
        };
        window.addEventListener('beforeunload', handleBeforeUnload);
        return () => {
            window.removeEventListener('beforeunload', handleBeforeUnload);
        };
    }, [descricao]);

    return (
        <div>
            <div className="container-ocorrencia">
                <h1>OCORRÊNCIA</h1>
                <h2>Teclado quebrado #001</h2>
                <p className="rm-number-ocorrencia">RM974568</p>

                <div className="details-ocorrencia">
                    <p><strong>RM Professor :</strong> 987604</p>
                    <p><strong>Data :</strong> 09/09/2024 &nbsp;&nbsp;&nbsp; <strong>Período :</strong> Noturno</p>
                    <p><strong>Laboratório :</strong> 1 &nbsp;&nbsp;&nbsp; <strong>Andar :</strong> 2 &nbsp;&nbsp;&nbsp; <strong>Máquina :</strong> 009675</p>
                </div>

                <div>
                    <p className="descricao1-ocorrencia"><strong>Descrição do problema:</strong></p>
                    <p style={{ color: '#000' }}>Teclado ao início da aula foi encontrado com as teclas desmontadas e o cabo de conexão rompido.</p>
                </div>
            </div>

            <div className="card-ocorrencia">
                <div className="problema-ocorrencia">
                    <p className="descricao2-ocorrencia"><strong>Resolução do problema:</strong></p>
                    <textarea 
                        rows="10" 
                        value={descricao} 
                        onChange={(e) => setDescricao(e.target.value)}
                    />
                </div>
            </div>

            <form id="ocorrenciaForm" onSubmit={(e) => { e.preventDefault(); confirmarEnvio(); }}>
                <button type="button" className="btn-voltar-ocorrencia" onClick={confirmarEnvio}>Enviar</button>
            </form>
        </div>
    );
};

export default Historico3
