import { useNavigate } from 'react-router-dom';
import './App.css';

function App() {
  const navigate = useNavigate(); // Obtener la función navigate

  // Función para manejar la navegación hacia la página de perfil
  function goToProfilePage() {
    navigate('/profile'); // Navegar hacia la página de perfil
  }

  return (
    <>
      <div>
        <h1>Main page</h1>
        <p>Navigation...</p>
        <nav>
          <ul>
            <li>
              <button onClick={goToProfilePage}>
                Profile page
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default App;
