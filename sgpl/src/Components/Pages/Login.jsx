import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import logo from './logo.png';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        
        const regex = /^RM\d+$/; 
        if (!regex.test(username)) {
            setError('O username deve começar com "RM" seguido apenas por números.');
            return;
        }

        console.log('Username:', username);
        console.log('Password:', password);
        navigate('/Notificacao');
    };

    const handlePasswordChange = (e) => {
        const value = e.target.value;

    
        if (/^\d*$/.test(value)) {
            setPassword(value);
            setError(''); 
        }
    };

    return (
        <div className="custom-background">
            <div className="login-container">
                <div className="card2">
                    <div className="logo-container">
                        <img className="logo" src={logo} alt="Logo da Empresa" />
                    </div>
                    <form className="login-form" onSubmit={handleSubmit}>
                        <input
                            type="text"
                            name="username"
                            placeholder="RM do Usuário"
                            required
                            value={username}
                            onChange={(e) => {
                                setUsername(e.target.value);
                                setError('');
                            }}
                        />
                        {error && <p style={{ color: 'red' }}>{error}</p>} {/* Exibe mensagem de erro */}
                        <input
                            type="password" 
                            name="password"
                            placeholder="Senha (apenas números)"
                            required
                            value={password}
                            onChange={handlePasswordChange} 
                        />
                        <button type="submit">Entrar</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;
