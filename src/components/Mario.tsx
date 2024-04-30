import { useNavigate } from 'react-router-dom';

function Mario() {
    const navigate = useNavigate(); // Obtener la función navigate

    // Función para manejar la navegación hacia la página principal
    function goToMainPage() {
        navigate('/'); // Navegar hacia la página principal
    }

    return (
        <div>
            <h2>Hi I'm Mario Bros</h2>
            <button onClick={goToMainPage}>Click hero to main page</button>
        </div>
    );
}

export default Mario;
