import App from "./App";
import Profile from "./components/Profile";
import ErrorPage from "./components/ErrorPage";

const routes = [
    {
        path:"/",
        element: <App/>,
        errorElement: <ErrorPage/>
    },
    {
        path:"Profile/:name",
        element: <Profile/>, 
    },
]

export default routes;