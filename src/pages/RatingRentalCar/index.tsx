import { Container, Row, Col, Form, Button, Card, InputGroup, FormControl } from 'react-bootstrap';
import Navbar from 'components/Navbar';
import './styles.css';
import { Rating } from 'react-simple-star-rating'
import React, { useState } from 'react'


export default function RatingRentalCar() {
    const [rating, setRating] = useState(0)

    const handleRating = (rate: number) => {
        setRating(rate)
    }

    return (
        <>
            <Navbar />
            <Row className='mt-4'>
                <Col>
                    <Container>
                        <h4 className='text-light text-center'>Finalize a devolução</h4>
                    </Container>
                </Col>

            </Row>
            <Row>
                <Col md='2'></Col>
                <Col >
                    <Card className='boxCard w-100'>
                        <Card.Body>
                            <Row>
                                <Col md="3" className='personBox'></Col>
                                <Col md="9">
                                    <Card.Title>
                                        Deixe um comentário sobre o carro locado!
                                    </Card.Title>
                                    <InputGroup>
                                        <FormControl as="textarea" aria-label="With textarea" className='form shadow-none' />
                                    </InputGroup>
                                </Col>
                            </Row>
                            <Row>
                                <Col md="4"></Col>
                                <Col md="4">
                                    <Card.Title className='text-center'>
                                        Dê a sua nota
                                    </Card.Title>
                                    <Rating className='w-100'
                                        onClick={handleRating}
                                        ratingValue={rating}
                                        allowHalfIcon
                                        size={60}
                                        transition
                                    />
                                </Col>
                                <Col md="4"></Col>
                            </Row>
                            <Row>
                                <Col md="9"></Col>
                                <Col md="3" className='d-flex flex-row-reverse mt-2'>
                                    <Button variant="secondary" href='/my-cars' className='w-100'>
                                        Confirmar devolução
                                    </Button>
                                </Col>
                            </Row>

                        </Card.Body>
                    </Card>
                </Col>
                <Col md='2'></Col>
            </Row>
        </>
    )
}
