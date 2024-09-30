import  { useState } from 'react';
import './Login.css';
import logo from './logo.png';
 
const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
 
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Username:', username);
        console.log('Password:', password);
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
                            onChange={(e) => setUsername(e.target.value)}
                        />
                        <input
                            type="password"
                            name="password"
                            placeholder="Senha"
                            pattern="[0-9]+"
                            title="Por favor, digite apenas números"
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <button type="submit" >Entrar</button>
                    </form>
                </div>
            </div>
        </div>
        
    )
}

export default Login