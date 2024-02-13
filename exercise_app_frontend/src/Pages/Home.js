import { NavLink } from "react-router-dom";

const Home = () => {



    return ( 

        <>
            <h1>Welcome to the home page</h1>
            <NavLink to = "/login">Login</NavLink>
        </>

     );
}
 
export default Home;