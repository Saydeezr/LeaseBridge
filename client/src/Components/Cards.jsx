import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'

export default function Cards() {
    return(
        <Card>
        <Card.Img variant="top" src="images/keys.jpg" />
        <Card.Body>
          <Card.Text>
            Landlords, start managing all aspects for your tenant and their monthly fees
          </Card.Text>
        </Card.Body>
      </Card>
    )
}