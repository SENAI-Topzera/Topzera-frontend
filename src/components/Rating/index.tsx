import { Car } from '../../types/car';
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import './styles.css'
import { Rating } from 'react-simple-star-rating'
import React, { useState } from 'react'


export default function AcceptDeclineUser() {
    const [rating, setRating] = useState(0)

    const handleRating = (rate: number) => {
        setRating(rate)
    }

    return (
        <>
            <Row>
                <h3 className='text-light text-center'>Avaliações</h3>
            </Row>
            <Col md="12" className='p-0'>
                <Card className='mb-4 mt-2'>
                    <Card.Body>
                        <Row>
                            <Col md="2" className="cardText">
                                <Card.Title className='text-truncate fs-5'>Jefferson Maylon Zickuhr</Card.Title>
                                <Row>
                                    <Rating
                                        onClick={handleRating}
                                        ratingValue={80} //editável em porcentagem 
                                        allowHalfIcon
                                        size={20}
                                        readonly
                                    />
                                </Row>
                            </Col>
                            <Col>
                                <Card.Text>
                                    n Zickuhr
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto, rem nobis quas doloremque ducimus ea accusantium nesciunt possimus quis nemo, at tenetur quasi inventore eveniet ab quod hic maxime. Iste! Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed vel alias, illum deserunt quisquam fugit error? Quia laboriosam porro, quasi ea, ab dolores, eos recusandae velit atqu.
                                </Card.Text>
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
            </Col>
        </>

    )

}
