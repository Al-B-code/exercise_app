import { Outlet } from "react-router-dom";
import DashboardSidebar from "../components/UserDashboardComponents/DashboardSiderbar";
import "../styles/Layout.css"

const Layout = () => {

    return ( 
        <div className="wrapper">
            <DashboardSidebar/>
            <div className="main">
                <div className="outlet-content">
                    <Outlet/>
                </div>
            </div>
        </div>
     );
}
 
export default Layout;