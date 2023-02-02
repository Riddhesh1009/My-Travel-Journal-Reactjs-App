import logo from "../images/globe.png"
export default function Nav(){
    return(
        <nav className="nav">
            <img className="nav--img" src={logo} alt="Logo" />
            <p className="nav--text">my travel journal</p>
        </nav>
    )
}