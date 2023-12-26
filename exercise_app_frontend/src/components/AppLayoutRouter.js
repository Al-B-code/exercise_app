import { Outlet, NavLink } from "react-router-dom";


// This needs to be thought through better. Websites dont have the welcome page / login in the nav bar.
const AppLayoutRouter = () => {






    return ( 
        <div className="nav-bar">
            <ul>
                <li>
                    <NavLink to = "/">Login / Homepage</NavLink>
                </li>
                <li>
                    link to user profile?
                </li>
                <li>
                    link to weight progress? 
                </li>
                <li>
                    link to excerise page?
                </li>
            </ul>
        </div>




     );
}
 
export default AppLayoutRouter;