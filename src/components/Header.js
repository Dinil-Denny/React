import { LOGO } from "../../utils/links";

const Header = ()=>{
    return (
        <div id='header'>
            <div> 
                <img alt='logo' id='logo' src={LOGO}/>
            </div>
            <div id='nav_links'>
                <ul id='menu_list'>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}
export default Header;