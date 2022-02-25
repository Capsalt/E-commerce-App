import React from 'react'
import { Button, Card, Row,Col  } from 'react-bootstrap';

const Cards = () => {
  return (
    <Card className="product-card">
    <Card.Img variant="top" src="https://picsum.photos/seed/picsum/200/300" />
    <Card.Body>
        <Card.Text>Eklenme Tarihi</Card.Text>
      <Card.Title>Ürün ismi</Card.Title>
      <Card.Text>
        Fiyat
      </Card.Text>
      <Button variant="primary">Sepete Ekle</Button>
    </Card.Body>
  </Card>
  )
}

export default Cards