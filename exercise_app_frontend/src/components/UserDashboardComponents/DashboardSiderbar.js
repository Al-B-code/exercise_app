import { UserContext } from "../../contexts/UserContext";
import { useContext, useState } from "react";
import Logout from "../Logout";
import DailyEntryModal from "./DailyEntryModal";
import "../../styles/UserDashboard.css"




const DashboardSidebar = () => {




    const { user } = useContext(UserContext);
    const [isOpen, setIsOpen] = useState(false);


    // console.log(user);



    return ( 

        <div className="side-bar">
        <p>Welcome</p>

            <div className="user-details">
                {user ? <p>name: {user.firstName}</p> : <p>Loading</p>}
                {user ? <p>email: {user.email}</p> : <p>Loading</p>}
                {user ? <p>role: {user.role}</p> : <p>Loading</p>}
            </div>
            <button id="daily-entry-modal-button" onClick={() => setIsOpen(true)}>Submit a daily entry</button>

        
            <nav>
                <ul>
                    <li><span className="sidebar-nav-list-element">Home</span></li>
                    <li><span className="sidebar-nav-list-element">Profile</span></li>
                    <li><span className="sidebar-nav-list-element">Settings</span></li>
                    <li><span className="sidebar-nav-list-element">Weight</span></li>
                    <li><span className="sidebar-nav-list-element">Calories</span></li>
                    <li><span className="sidebar-nav-list-element">Goals</span></li>
                </ul>
            </nav>
            {isOpen && <DailyEntryModal setIsOpen={setIsOpen} />}
            <Logout/>

        </div>




    );
}

export default DashboardSidebar;