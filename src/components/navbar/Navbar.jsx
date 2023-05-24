import React from 'react';
// import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'
import logo from '../../assets/logo.svg'
import './navbar.css';

const Menu = () => ( 
<>
    <p><a href="#home">Home</a></p>
    <p><a href="#products">Products</a></p>
    <p><a href="#explore">Explore</a></p>
    <p><a href="#store">Store Locator</a></p>
    <p><a href="#contacts">Contact</a></p>
    <p><a href="#carts">Cart</a></p>
</>
    )

const Navbar = () => {
    // const [toggleMenu, setToggleMenu] = useState(false);
    <div className='shop__navbar-links'>
        <div className='shop__navbar-links_logo'>
            <img src={logo} alt="logo" />
        </div>
        <div className='shop__navbar-links_container'>
            <Menu />
        </div>
    </ div>
}

export default Navbar