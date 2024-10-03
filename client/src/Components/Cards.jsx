import { Link } from 'react-router-dom'
import EachCard from './eachCard'

export default function Card() {
    return(
         <div className='cards'>
           <h1>Want to Learn More</h1>
           <div className="cards-container">
            <div className="cards-wrapper">
                <ul className="cards-items">
                    <EachCard >
                    </EachCard>
                </ul>
            </div>
           </div>
         </div>
    )
}