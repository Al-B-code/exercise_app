import { UserContext } from "../../contexts/UserContext";
import { useContext } from "react";




const DashboardSidebar = () => {




    const { user } = useContext(UserContext);




    return ( 

        <>
        <p>This will be the sticky sidebar</p>
        <div>
            <p>Name: {user.firstname + " " + user.lastname}</p>
            <p>Email: {user.email}</p>
            <p>Role: {user.role} </p>
        </div>
        <nav>
            <ul>
                <li>Home</li>
                <li>Profile</li>
                <li>Settings</li>
            </ul>
        </nav>
        </>




    );
}

export default DashboardSidebar;