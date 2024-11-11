import { NavLink } from "react-router-dom";


const Header = () => {
    return (
        <div style={{'paddingBottom' : '50px'}}>
            <NavLink style={{'marginRight' : '20px'}} to="/">Home</NavLink>
            <NavLink to="Login">Login</NavLink>
        </div>
    );
};

export default Header;