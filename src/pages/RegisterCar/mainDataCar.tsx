import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Form, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { ReactComponent as InfoIcon } from './../../assets/icons/info-circle.svg';

function CarMainData() {

    useEffect(() => {
        console.log('executa ao iniciar');
    }, []);

    return (
        <>
            {/* DADOS VEICULO */}
            <Row className='pt-5 my-3'>
                <h3 className='text-light'>Preencha os dados do seu veículo</h3>
            </Row>
            <Container>
                <Form className="text-light">
                    <Row>
                        <Col md="3">
                            <Form.Group className="mb-3" controlId="">
                                <Form.Label>Marca</Form.Label>
                                <Form.Select aria-label="Marca">
                                    <option disabled selected>Selecione</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </Form.Select>
                            </Form.Group>
                        </Col>
                        <Col md="6">
                            <Form.Group className="mb-3" controlId="">
                                <Form.Label>Modelo</Form.Label>
                                <Form.Select aria-label="Modelo">
                                    <option disabled selected>Selecione</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </Form.Select>
                            </Form.Group>
                        </Col>
                        <Col md="3">
                            <Form.Group className="mb-3" controlId="">
                                <Form.Label>Ano do Modelo</Form.Label>
                                <Form.Select aria-label="Ano do Modelo">
                                    <option disabled selected>Selecione</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </Form.Select>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col md="3">
                            <Form.Group className="mb-3" controlId="">
                                <Form.Label>Cor</Form.Label>
                                <Form.Select aria-label="Cor">
                                    <option disabled selected>Selecione</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </Form.Select>
                            </Form.Group>
                        </Col>
                        <Col md="3">
                            <Form.Group className="mb-3" controlId="">
                                <Form.Label>Placa</Form.Label>
                                <Form.Control type="text" placeholder="" />
                            </Form.Group>
                        </Col>
                        <Col md="3">
                            <Form.Group className="mb-3" controlId="">
                                <Form.Label>Combustível usado</Form.Label>
                                <Form.Select aria-label="Combustível usado">
                                    <option disabled selected>Selecione</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </Form.Select>
                            </Form.Group>
                        </Col>
                        <Col md="3">
                            <Form.Group className="mb-3" controlId="">
                                <Form.Label>Câmbio</Form.Label>
                                <Form.Select aria-label="Câmbio">
                                    <option disabled selected>Selecione</option>
                                    <option value="1">Manual</option>
                                    <option value="2">Automatico</option>
                                </Form.Select>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col md="3">
                            <Form.Group className="mb-3" controlId="">
                                <Form.Label>Quantidade de Portas</Form.Label>
                                <Form.Control type="number" min="1" placeholder="" />
                            </Form.Group>
                        </Col>
                        <Col md="3">
                            <Form.Group className="mb-3" controlId="">
                                <Form.Label>Capacidade de Pessoas</Form.Label>
                                <Form.Control type="number" min="1" placeholder="" />
                            </Form.Group>
                        </Col>
                        <Col md="3">
                            <Form.Group className="mb-3" controlId="">
                                <Form.Label>Capacidade de Bagagem</Form.Label>
                                <Form.Select aria-label="Capacidade de Bagagem">
                                    <option disabled selected>Selecione</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </Form.Select>
                            </Form.Group>
                        </Col>
                        <Col md="3">
                            <Form.Group className="mb-3" controlId="">
                                <Form.Label>Número do Registro
                                <OverlayTrigger placement="right" overlay={<Tooltip id="tooltip-registro">Informe o número do registro do veículo</Tooltip>}>
                                            <span className="px-1">< InfoIcon /></span>
                                        </OverlayTrigger>
                                </Form.Label>
                                <Form.Control type="text" placeholder="" />
                            </Form.Group>
                        </Col>
                    </Row>
                </Form>
            </Container>
        </>
    )
} export default CarMainData;