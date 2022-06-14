import React, { useEffect, useState } from 'react';
import { Container, Row, Ratio, Card, Form, InputGroup, Button, Col } from 'react-bootstrap';


function SelectLocation() {

    useEffect(() => {
        console.log('executa ao iniciar');
    }, []);

    return (
        <>
            <Row className='pt-5 my-3'>
                <h3 className='text-light'>Selecione a localização e data para pegar o veículo</h3>
            </Row>
            <Container>
                <Row>
                    <Ratio className='border border-primary border-5 rounded' aspectRatio={1 / 4}>
                        <iframe src="https://maps.google.com/maps?q=senai,%20blumenau&t=&z=13&ie=UTF8&iwloc=&output=embed" scrolling="no"></iframe>
                    </Ratio>
                </Row>
                <Row>
                    <Card bg='primary' key='localDate' className="mt-3">
                        <Card.Body>
                            <Row className='form-row'>
                                <Form.Group className="col-md-6" controlId="formBasicPassword">
                                    <Form.Label>Localização</Form.Label>
                                    <Form.Control type="text" placeholder="Digite seu estado ou cidade" />
                                </Form.Group>
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
                <Row>
                    <Card bg='light' key='primary' className="my-3">
                        <Card.Body>
                            <Row className='form-row'>
                                <Form.Group className="col-md-3">
                                    <Form.Label>Valor da FIPE</Form.Label>
                                    <InputGroup id="valorFIPE">
                                        <InputGroup.Text>R$</InputGroup.Text>
                                        <Form.Control type="number" placeholder="0,00" disabled />
                                    </InputGroup>
                                </Form.Group>
                                <Form.Group className="col-md-3">
                                    <Form.Label>Valor da Hora</Form.Label>
                                    <InputGroup id="valorFIPE">
                                        <InputGroup.Text>R$</InputGroup.Text>
                                        <Form.Control type="number" placeholder="0,00" />
                                    </InputGroup>
                                </Form.Group>
                            </Row>
                            <Row className='d-flex justify-content-end'>
                                <Card.Text className="col-md-6 my-3">
                                <p className='m-0'>0,20% do Valor da FIPE: R$ 69,33</p>
                                <p className='m-0'>3% de Taxa do aluguel: R$ 2,08</p>
                                <p className='m-0'>Valor hora: R$ 9,31</p>
                                </Card.Text>
                                <Card.Text className="col-md-6 my-3">
                                <Card.Title className='m-0 fw-bold text-end'>Valor sugerido de locação</Card.Title>
                                <p className='m-0 fs-1 fw-bolder text-end'>R$ 99,99</p>
                                </Card.Text>
                            </Row>
                        </Card.Body>
                    </Card>
                </Row>
                <Row>
                    <Col xs={9}>
                    </Col>
                    <Col xs={3} className="d-flex flex-row-reverse px-0">
                        <Button id="continuarForm" className="w-100 mb-5" variant="primary" type="button">Cadastrar</Button>
                    </Col>
                </Row>
            </Container>
        </>
    )
} export default SelectLocation;