import { UserContext } from "../../contexts/UserContext";
import { useContext } from "react";
import Logout from "../Logout";
import DailyEntryModal from "./DailyEntryModal";
import "../../styles/UserDashboard.css"




const DashboardSidebar = ({ setIsOpen, isOpen }) => {




    const { user } = useContext(UserContext);

    // console.log(user);



    return ( 

        <div className="side-bar">
        <p>Welcome</p>

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
        <button id="daily-entry-modal-button" onClick={() => setIsOpen(true)}>Submit a daily entry</button>
        {isOpen && <DailyEntryModal setIsOpen={setIsOpen} />}


        <Logout/>

        </div>




    );
}

export default DashboardSidebar;