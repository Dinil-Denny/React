import { LOGO } from "../../utils/links";
import { useState , useEffect} from "react";
import { Link } from "react-router-dom";

const Header = ()=>{
    const [loginState,setLoginState] = useState("Login");

    useEffect(()=>{
        console.log("useEffect called")
    },[loginState])

    return (
        <div id='header'>
            <div> 
                <img alt='logo' id='logo' src={LOGO}/>
            </div>
            <div id='nav_links'>
                <ul id='menu_list'>
                    <li>
                        <Link to="/" className="nav_menu">Home</Link>
                    </li>
                    <li>
                        <Link to="/about" className="nav_menu">About</Link>
                    </li>
                    <li>
                        <Link to="/contact" className="nav_menu">Contact</Link>
                    </li>
                    <li>Cart</li>
                    <li>
                        <button id="login_button" onClick={()=>{
                            (loginState==="Login") ? setLoginState("Logout") : setLoginState("Login");
                        }}>{loginState}</button>
                    </li>
                </ul>
            </div>
        </div>
    )
}
export default Header;