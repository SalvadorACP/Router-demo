import { useNavigate } from 'react-router-dom';

function Luigi() {
    const navigate = useNavigate(); // Obtener la función navigate

    // Función para manejar la navegación hacia la página principal
    function goToMainPage() {
        navigate('/'); // Navegar hacia la página principal
    }

    return (
        <div>
            <h2>Hi, I'm Luigi</h2>
            <p>I'm Mario's brother!!!</p>
            <button onClick={goToMainPage}>Click hero to main page</button>
        </div>
    );
}

export default Luigi;
