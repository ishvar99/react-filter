import React from "react"
import { Card, Button } from "react-bootstrap"

const CardComponent = (props) => {
  const { title, description, price, size } = props
  return (
    <Card className="mx-2 mb-4" style={{ width: "18rem" }}>
      <Card.Img variant="top" src="https://bit.ly/white-pigeon" />
      <Card.Body>
        <Card.Title>
          {title} (size: {size})
        </Card.Title>
        <Card.Text>{description}</Card.Text>
        <Card.Title>{price}</Card.Title>
      </Card.Body>
    </Card>
  )
}

export default CardComponent
