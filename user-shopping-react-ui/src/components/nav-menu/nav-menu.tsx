import { useNavigate } from "react-router";
import "./nav-menu.scss";
const NavMenu = () => {
    const navigate = useNavigate();


    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/login');
    }

    return <>
    <div className="nav-menu">
        <div className="nav-menu__logo-name">
            <p>Storage Service</p>
        </div>
        <div className="nav-menu__right-section">
        <div className="nav-menu__right-section__links">
            <a href="/">Home</a>
            <a href="/products">Products</a>
            <a href="/cart">Cart</a>
        </div>
        <div className="nav-menu__right-section__logout">
            <button className="btn" type="button" onClick={handleLogout}>Logout</button>
        </div>
        </div>
    </div>
    </>
}

export default NavMenu;