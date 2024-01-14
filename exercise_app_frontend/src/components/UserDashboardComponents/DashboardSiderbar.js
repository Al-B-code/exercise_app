import { UserContext } from "../../contexts/UserContext";
import { useContext } from "react";




const DashboardSidebar = () => {




    const { user } = useContext(UserContext);

    // console.log(user);



    return ( 

        <>
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
        </>




    );
}

export default DashboardSidebar;