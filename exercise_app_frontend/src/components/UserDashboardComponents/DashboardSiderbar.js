import { UserContext } from "../../contexts/UserContext";
import { useContext } from "react";
import Logout from "../../Pages/Logout";




const DashboardSidebar = () => {




    const { user } = useContext(UserContext);

    // console.log(user);



    return ( 

        <div className="side-bar">
        <p>This will be the sticky sidebar</p>

        <div className="user-details">
            {user ? <p>name: {user.firstName}</p> : <p>Loading</p>}
            {user ? <p>email: {user.email}</p> : <p>Loading</p>}
            {user ? <p>name: {user.role}</p> : <p>Loading</p>}
        </div>
      
        <nav>
            <ul>
                <li>Home</li>
                <li>Profile</li>
                <li>Settings</li>
            </ul>
        </nav>

        <Logout/>

        </div>




    );
}

export default DashboardSidebar;