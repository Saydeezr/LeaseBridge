import{ useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import { Button } from './Button';
import '../assets/css/nav.css'

export default function Nav() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => {setClick(!click)};
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if (window.innerWidth <= 960) {
          setButton(false);
        } else {
          setButton(true);
        }
      };

      useEffect(() => {
        showButton();
      }, []);

    window.addEventListener('resize', showButton)

    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                     LEASEBRIDGE <i className="fa-solid fa-house" />
                    </Link>
                    <div className="menu-icon" onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-items'>
                            <Link to='/' className='nav-links' onClick={closeMobileMenu}>Home</Link>
                        </li>
                        <li className='nav-items'>
                            <Link to='/landlords' className='nav-links' onClick={closeMobileMenu}>Landlords</Link>
                        </li>
                        <li className='nav-items'>
                            <Link to='/tenants' className='nav-links' onClick={closeMobileMenu}>Tenants</Link>
                        </li>
                        <li className='nav-items'>
                            <Link to='/features' className='nav-links' onClick={closeMobileMenu}>Features</Link>
                        </li>
                        <li className='nav-items'>
                            <Link to='/sign-up' className='nav-links-mobile' onClick={closeMobileMenu}>Signup</Link>
                        </li>
                        <li className='nav-items'>
                            <Link to='/login' className='nav-links-mobile' onClick={closeMobileMenu}>Login</Link>
                        </li>
                    </ul>
                    {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}
                </div>
            </nav>
        </>
    )
}