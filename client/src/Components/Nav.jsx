import{ useState } from 'react'
import { Link } from "react-router-dom";
import { Button } from './Button';

export default function Nav() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => {setClick(!click)};
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true)
        }
    };

    window.addEventListener('resize', showButton)

    return (
        <div>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo">
                    LEASEBRIDGE <i className="fa-solid fa-house"></i>
                    </Link>
                    <div className="menu-icon" onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-items'>
                            <Link to='/' className='nav-links' onClick={closeMobileMenu}></Link>
                            Home
                        </li>
                        <li className='nav-items'>
                            <Link to='/landlords' className='nav-links' onClick={closeMobileMenu}></Link>
                            Landlords
                        </li>
                        <li className='nav-items'>
                            <Link to='/tenants' className='nav-links' onClick={closeMobileMenu}></Link>
                            Tenants
                        </li>
                        <li className='nav-items'>
                            <Link to='/features' className='nav-links' onClick={closeMobileMenu}></Link>
                            Features
                        </li>
                        <li className='nav-items'>
                            <Link to='/sign-up' className='nav-links-mobile' onClick={closeMobileMenu}></Link>
                            Signup
                        </li>
                    </ul>
                    {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}
                </div>
            </nav>
        </div>
    )
}