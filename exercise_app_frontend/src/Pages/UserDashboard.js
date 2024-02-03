import UserDashboardContainer from "../containers/UserDashboardContainer";
import Logout from "../components/Logout";
import "../styles/UserDashboard.css";




const UserDashboard = () => {



    // todo: the login button should eventually be added to a nav bar component instead of being added on it's own to the dashboard.
    return ( 
        <>
        <UserDashboardContainer/>
        </>


    );
}

export default UserDashboard;