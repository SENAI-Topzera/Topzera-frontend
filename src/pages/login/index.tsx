import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import './styles.css';
import React, { useEffect, useState } from 'react';
import { BASE_URL } from 'utils/requests';
import axios from 'axios';
import { User } from 'types/user';
import { useNavigate } from 'react-router-dom';

function login() {

    const [user, setUser] = useState<User>();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dataUser = { email, password };
    const navigate = useNavigate();

    const handleLogin = (event: React.SyntheticEvent) => {
        event.preventDefault();

        axios.post(`${BASE_URL}/api/login`, dataUser)
            .then(response => {
                const data = response.data as String;
                alert(data);
                if(data == "Logado") {
                    navigate("/home")
                    }
                console.log(data);
            });
    }

    

    return (
        <>
            <div className='imgCar'>
                <Row>
                    <Col className="d-flex align-items-center justify-content-center flex-column bg-dark vh-100" md="6">
                        <Container >
                            <Row>
                                <Col md='2'>
                                </Col>
                                <Col md='8'>
                                    <Form onSubmit={handleLogin}>
                                        <h3 className='text-light text-center'>Faça o seu login aqui</h3>
                                        <Form.Group className="mb-3">
                                            <Form.Control type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
                                        </Form.Group>

                                        <Form.Group>
                                            <Form.Control type="password" placeholder="Senha" value={password} onChange={e => setPassword(e.target.value)} />
                                        </Form.Group>
                                        <Form.Group className="mb-3 text-light">
                                            <a href="/forget-Password" className='text-light text-sm'>Esqueci minha senha</a>
                                        </Form.Group>

                                        <Form.Group className="mb-3">
                                            <Row>
                                                <Col>
                                                    <Button id="login" type="submit" variant="primary" className="w-100" >
                                                        Login
                                                    </Button>
                                                </Col>
                                                <Col>
                                                    <Button variant="primary" className="w-100" href="/register-user">
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
            </div>
        </>
    )
}

export default login;