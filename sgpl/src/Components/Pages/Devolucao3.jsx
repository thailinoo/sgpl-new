import React from 'react';
import './Devolucao1.css';

const Devolucao3 = () => {
    return (
        <>
            <div className="devolucao-ocorrencia"> 
                <h1>OCORRÊNCIA</h1>
                <h2>Falha no compartilhamento de tela  #003</h2>
                <p className="devolucao-registro">RM974568</p>

                <div className="devolucao-detalhes"> 
                    <p><strong>RM Professor :</strong> 987604</p>
                    <p><strong>Data :</strong> 10/09/2024 &nbsp;&nbsp;&nbsp; <strong>Período :</strong> Noturno</p>
                    <p><strong>Laboratório :</strong> 1 &nbsp;&nbsp;&nbsp; <strong>Andar :</strong> 2 &nbsp;&nbsp;&nbsp; <strong>Máquina :</strong> 009675</p>
                </div>

                <div>
                    <p className="devolucao-descricao"><strong>Descrição do problema:</strong></p>
                    <p>Não foi possível compartilhar a tela com os alunos.</p> 
                </div>
            </div> 

            <div className="devolucao-resolucao"> 
                <p className="devolucao-descricao"><strong>Resolução do problema:</strong></p>
                <p>O erro estava no sistema de compartilhamento.</p>
            </div>
            
            <form action="/Devolucoes" method="get" className="devolucao-form"> 
                <button type="submit" className="devolucao-btn">Voltar</button> 
            </form>
        </>
    );
};

export default Devolucao3