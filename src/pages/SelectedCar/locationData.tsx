import React, { useEffect } from 'react';
import { Container, Row, Ratio, Card, Form, InputGroup, Button, Col } from 'react-bootstrap';


function LocationData() {

    useEffect(() => {
        console.log('executa ao iniciar');
    }, []);

    return (
        <>
            <Row className='pt-5 my-3'>
                <h3 className='text-light'>Selecione e data para pegar o veículo</h3>
            </Row>
            <Container>
                <Row>
                    <Card bg='primary' key='localDate' className="mt-3">
                        <Card.Body>
                            <Row className='form-row'>
                                <Form.Group className="col-md-6">
                                    <Form.Label>Data de disponibilidade</Form.Label>
                                    <InputGroup className="">
                                        <Form.Control type="date" aria-label="First name" />
                                        <Form.Control type="date" aria-label="Last name" />
                                    </InputGroup>
                                </Form.Group>
                            </Row>
                        </Card.Body>
                    </Card>
                </Row>
                <Row className="my-3">
                    <Col md={6}>
                        <Ratio className='border border-primary border-5 rounded' aspectRatio={'16x9'}>
                            <iframe src="https://maps.google.com/maps?q=senai,%20blumenau&t=&z=13&ie=UTF8&iwloc=&output=embed" className="embed-responsive-item" scrolling="no"></iframe>
                        </Ratio>
                    </Col>
                    <Col md={6}>
                        <Card bg='light' key='primary' className="h-100">
                            <Card.Body>
                                <Row className='form-row '>
                                    <Form.Group className="col-md-3">
                                        <Form.Label>Valor da FIPE</Form.Label>
                                        <Card.Text className=''>
                                            999,00
                                        </Card.Text>
                                    </Form.Group>
                                    <Form.Group className="col-md-3">
                                        <Form.Label>Valor da Hora</Form.Label>
                                        <Card.Text className=''>
                                            999,00
                                        </Card.Text>
                                    </Form.Group>
                                </Row>
                                <Row className='d-flex justify-content-end'>
                                    <Card.Text className="col-md-6 my-3">
                                        <p className='m-0'>0,20% do Valor da FIPE: R$ 69,33</p>
                                        <p className='m-0'>3% de Taxa do aluguel: R$ 2,08</p>
                                        <p className='m-0'>Valor hora: R$ 9,31</p>
                                    </Card.Text>
                                    <Card.Text className="col-md-6 my-3">
                                        <Card.Title className='m-0 fw-bold text-end'>Valor total previsto a pagar</Card.Title>
                                        <p className='m-0 fs-1 fw-bolder text-end'>R$ 99,99</p>
                                    </Card.Text>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    )
} export default LocationData;