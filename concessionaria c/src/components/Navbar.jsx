import "../css/navbar.css"

const Navbar = () => {
    return (
        <nav className="navbar">
        <div className="navbar-container">
        <div className="sx-nav">
            <ul className="nav-list">
                <li className="nav-item">Home</li>
                <li className="nav-item">Chi siamo</li>
                <li className="nav-item">Gamma</li>
                <li className="nav-item">Prenota un Test Ride</li>
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