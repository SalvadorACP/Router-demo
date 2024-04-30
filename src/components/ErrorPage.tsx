import { useNavigate } from "react-router-dom";

function ErrorPage() {
    const navigate = useNavigate(); 

    
    function goToMainPage() {
        navigate('/'); 
    }

    return (
        <div>
            <h1>
                Sorry, this page doesn't exist!!!
            </h1>
            <button onClick={goToMainPage}>
                You can go to main page by clicking here!!!
            </button>
        </div>
    );
}

export default ErrorPage;