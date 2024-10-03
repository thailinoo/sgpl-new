import React from 'react';
import './Devolucao1.css';

const Devolucao1 = () => {
    return (
        <div className="ocorrencia-principal">
            <header>
                <div className="logo-ocorrencia">
                    {/* Logo removido */}
                </div>
            </header>

            <div className="conteudo-ocorrencia">
                <h1>OCORRÊNCIA</h1>
                <h2>Teclado quebrado #001</h2>
                <p className="numero-rm">RM974568</p>

                <div className="detalhes-ocorrencia">
                    <p><strong>RM Professor :</strong> 987604</p>
                    <p><strong>Data :</strong> 09/09/2024 &nbsp;&nbsp;&nbsp; <strong>Período :</strong> Noturno</p>
                    <p><strong>Laboratório :</strong> 1 &nbsp;&nbsp;&nbsp; <strong>Andar :</strong> 2 &nbsp;&nbsp;&nbsp; <strong>Máquina :</strong> 009675</p>
                </div>

                <div>
                    <p className="descricao-problema"><strong>Descrição do problema:</strong></p>
                    <p>Teclado ao início da aula foi encontrado com as teclas desmontadas e o cabo de conexão rompido.</p>
                </div>
            </div>

            <div className="cartao-resolucao">
                <p className="descricao-resolucao"><strong>Resolução do problema:</strong></p>
                <p>Foi realizada a troca dos equipamentos.</p>
            </div>

            <form action="devolucoes.html" method="get">
                <button type="submit" className="botao-voltar">Voltar</button>
            </form>
        </div>
    );
};

export default Devolucao1
