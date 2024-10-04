import React from 'react';
import './Devolucao1.css';

const Devolucao2 = () => {
    return (
        <>
            <div className="devolucao-ocorrencia"> 
                <h1>OCORRÊNCIA</h1>
                <h2>Erro no VS Code #001</h2>
                <p className="devolucao-registro">RM996045</p>

                <div className="devolucao-detalhes"> 
                    <p><strong>RM Professor :</strong> 904536</p>
                    <p><strong>Data :</strong> 11/09/2024 &nbsp;&nbsp;&nbsp; <strong>Período :</strong> Matutino</p>
                    <p><strong>Laboratório :</strong> 2 &nbsp;&nbsp;&nbsp; <strong>Andar :</strong> 4 &nbsp;&nbsp;&nbsp; <strong>Máquina :</strong> 42196</p>
                </div>

                <div>
                    <p className="devolucao-descricao"><strong>Descrição do problema:</strong></p>
                    <p>O aluno não conseguiu abrir o VS code.</p> 
                </div>
            </div> 

            <div className="devolucao-resolucao"> 
                <p className="devolucao-descricao"><strong>Resolução do problema:</strong></p>
                <p>Foi realizado novo download do programa.</p>
            </div>
            
            <form action="/Devolucoes" method="get" className="devolucao-form"> 
                <button type="submit" className="devolucao-btn">Voltar</button> 
            </form>
        </>
    );
};

export default Devolucao2
