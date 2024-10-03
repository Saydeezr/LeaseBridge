import { Button } from "./Button";
import '../assets/css/HeroSection.css'
import '../app.css'

export default function HeroSection() {
    return (
        <div className="hero-container">
            <div></div>
            <h1>Renting Made Easy</h1>
            <p>All with the click of a few buttons!</p>
            <div className="hero-btns">
                <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>
                    I'm a Landlord
                </Button>
                <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>
                    I'm a Tenant 
                </Button>
            </div>
        </div>
    )
}