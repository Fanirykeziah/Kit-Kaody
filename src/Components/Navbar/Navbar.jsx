import "./Navbar.css";
import logo from '../img/blue.png';
import kitkaody from '../img/text.png';

export function Nav() {
    return (
        <div className="navbar">
            <div className="logo">
               <img src={logo} className="logo-img"/>
               <img src={kitkaody} className="logo-txt" />
            </div>
        </div>
    )
}