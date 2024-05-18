import "../css/navbar.css"

const Navbar = () => {
    return (
        <nav className="navbar">
        <div className="navbar-container">
        <div className="sx-nav">
            <ul className="nav-list">
                <li className="nav-item">Home</li>
                <li className="nav-item">Chi siamo</li>
                <li className="nav-item">Marche</li>
                <li className="nav-item">Prenota un test ride</li>
            </ul> 
            </div>
            <div className="dx-nav">     
            <ul className="nav-options">
                <li className="options-item">Accedi</li>
                <li className="options-item">Registrati</li>
            </ul>
            </div> 
            </div> 
        </nav>
    )
}

export default Navbar
