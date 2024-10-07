import { Button } from './Button';
import { Link } from 'react-router-dom';
import '../assets/css/footer.css'

export default function Footer() {
    return(
            <div className='footer-container'>
                    <div sm={8} className="text-center" >
                        <p>&copy; {new Date().getFullYear()} LeaseBridge. All rights reserved. <i className="fa-solid fa-house" /></p>
                    </div>
            </div>
    )
}