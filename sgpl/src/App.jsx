import { Outlet, useLocation } from 'react-router-dom';
import NavBar from './Components/Navbar';
import './index.css';

function App() {
    const location = useLocation(); 

    return (
        <div>
            {/* Renderiza a NavBar apenas se não estiver na rota de login */}
            {location.pathname !== '/' && <NavBar />} {/* Renderiza a NavBar se a rota não for '/' */}
            <Outlet /> {/* Renderiza os componentes filhos */}
        </div>
    );
}

export default App;
