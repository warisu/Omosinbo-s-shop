import React, {useState} from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'
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
    const [toggleMenu, setToggleMenu] = useState(false);
    return(
        <div className='shop__navbar'>
            <div className='shop__navbar-links'>
                <div className='shop__navbar-links_logo'>
                    <img src={logo} alt="logo" />
                </div>
                <div className='shop__navbar-links_container'>
                    <Menu />
                </div>
            </ div>
            <div className='shop__navbar-sign'>
                <p>Sign in</p>
                <button type='button'>Sign up</button>
            </div>
            <div className='shop__navbar-menu'>
                {toggleMenu
                ? <RiCloseLine color='#fff' size={27} onClick={() => setToggleMenu(false)} />
                : <RiMenu3Line color='#fff' size={27} onClick={() => setToggleMenu(true)} />
                }
                {toggleMenu && (
                <div className='shop__navbar-menu_container scale-up-center'>
                    <div className='shop__navbar-menu_container-links'>
                        <Menu />
                    </div>
                    <div className='shop__navbar-menu_container-links-sign'>
                        <p>Sign in</p>
                        <button type='button'>Sign up</button>
                    </div>
                </div>
                )}
            </div>
        </div>
    )
}

export default Navbar