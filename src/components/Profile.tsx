import { Outlet, useParams } from "react-router-dom";
import Luigi from "./Luigi";
import Mario from "./Mario";
import DefaulProfile from "./DefaultProfile";

function Profile(){
    const {name} = useParams();

    return(
        <div>
            <h1>Profile Page!!!</h1>
            <p>Something else...</p>
            {name === "Mario" ? (
            <Mario/>
            ):name === "Luigi" ? (
            <Luigi/>
            ):(
                <DefaulProfile/>
            )}
            <Outlet />
        </div>
    );
}

export default Profile;