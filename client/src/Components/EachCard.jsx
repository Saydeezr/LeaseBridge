import { Card } from 'react-bootstrap'

export default function EachCard() {
    return (
        <Card>
        <Card.Img variant="top" src="assets/images/keys.jpg" />
        <Card.Body>
          <Card.Text>
            Landlords, start managing all aspects for your tenant and their monthly fees
          </Card.Text>
        </Card.Body>
      </Card>
    )

}