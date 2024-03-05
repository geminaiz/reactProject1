import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
    return(
        <ul className="ul">
            <li className="li">
                <Link to = {"/"}>home</Link>
            </li>
            <li className="li">
                <Link to = {"/contatti"}>contatti</Link>
            </li>
            <li className="li">
                <Link to = {"/about"}>about</Link>
            </li>
            <li className="li">
                <Link to = {"/cards"}>cards versione 1</Link>
            </li>
            <li className="li">
                <Link to = {"/cards-children"}>cards versione 2</Link>
            </li>
        </ul>
    )
}

export default Navbar;