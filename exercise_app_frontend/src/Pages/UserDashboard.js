import UserDashboardContainer from "../containers/UserDashboardContainer";
import Logout from "./Logout";




const UserDashboard = () => {



    // todo: the login button should eventually be added to a nav bar component instead of being added on it's own to the dashboard.
    return ( 
        <>
        <p>Hello From the User DashBoard page</p>
        <UserDashboardContainer/>
        <Logout/>
        </>


    );
}

export default UserDashboard;