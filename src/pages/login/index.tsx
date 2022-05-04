import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import './styles.css';

function login() {
    return (
        <>
            <Row>
                <Col className="d-flex align-items-center justify-content-center flex-column bg-dark vh-100" md="6">
                    <Container >
                        <Row>
                            <Col md='2'>
                            </Col>
                            <Col md='8'>
                                <Form>
                                    <h3 className='text-light text-center'>Faça o seu login aqui</h3>
                                    <Form.Group className="mb-3">
                                        <Form.Control type="email" placeholder="Email" />
                                    </Form.Group>

                                    <Form.Group>
                                        <Form.Control type="password" placeholder="Senha" />
                                    </Form.Group>
                                    <Form.Group className="mb-3">
                                        <a href="/forgetPassword" className='text-light text-sm'>Esqueci minha senha</a>
                                    </Form.Group>

                                    <Form.Group className="mb-3">
                                        <Row>
                                            <Col>
                                                <Button variant="primary" className="w-100">
                                                    Login
                                                </Button>
                                            </Col>
                                            <Col>
                                                <Button variant="primary" className="w-100">
                                                    Cadastrar
                                                </Button>
                                            </Col>
                                        </Row>

                                    </Form.Group>

                                </Form>
                            </Col>
                            <Col md='2'>
                            </Col>
                        </Row>
                    </Container>
                </Col>
                <Col className="flex-column vh-100" md="6">

                </Col>
            </Row>
            {/* <Container className="bg-dark vh-100 col-6">
                <Form className="col-8">
                    <Form.Text> <p>Faça o seu login aqui </p></Form.Text>
                    <Form.Group className="mb-3">
                        <Form.Control type="email" placeholder="Email" />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Control type="password" placeholder="Senha" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Text> <a href="/forgetPassword">Esqueci minha senha</a> </Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Button variant="primary" className="w-25 p-1">
                            Login
                        </Button>
                        <Button variant="primary" className="w-25 p-1">
                            Cadastrar
                        </Button>
                    </Form.Group>
                </Form>
            </Container> */}
        </>
    )
}

export default login;