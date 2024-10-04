import React from 'react';
import { useNavigate } from 'react-router-dom';
import './notificacao.css'; 
import logo from './logo.png'; 

const Notificacao = () => {
    const navigate = useNavigate(); 

    const handleClose = () => {
        navigate('/Historico');
    };

    return (
        <div className="custom-background2">
            <div className="login-container">
                <div className="card principal">
                    <button onClick={handleClose} className="close-button" title="">X</button>
                    <div className="logo-container">
                        <img className="logo" src={logo} alt="Logo da Empresa" />
                        <p>Classificação das ocorrências por cor</p>
                    </div>
                    <div className="card-container">
                        <div className="card vermelho2">
                            <p>Urgente: Não podem esperar</p>
                        </div>
                        <div className="card amarelo2">
                            <p>Mediano: Espera mínima</p>
                        </div>
                        <div className="card verde2">
                            <p>Não urgente: Podem esperar</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Notificacao;
