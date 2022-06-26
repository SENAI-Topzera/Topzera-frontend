import React from 'react';
import './styles.css';
import { Container, Row, Col, Card, Button, Nav, CardImg } from "react-bootstrap";
import { ReactComponent as Person } from './../../assets/icons/person.svg';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { BASE_URL } from '../../utils/requests';
import { User } from '../../types/user';
import { CURRENT_USER } from 'utils/requests';

function LeftAccountBar() {

    const [user, setUser] = useState<User>();

    useEffect(() => {
        axios.get(`${BASE_URL}/api/users/${CURRENT_USER}`)
            .then(response => {
                const data = response.data as User;
                setUser(data);
            });
    }, []);

    return (
        <Nav defaultActiveKey="/home" className="flex-column bg-light h-100">
            <Row>
                <Col md="1"></Col>
                <Col md="10">
                    <Row>
                        <Col md="12">
                            <Container>
                                <Person className='person' />
                            </Container>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <h6 className='text-center'>{user?.name}</h6>
                        </Col>
                    </Row>
                </Col>
                <Col md="1"></Col>
            </Row>

            <Row>
                <Col>
                    <Container>
                        <Row className="d-flex align-items-center justify-content-center flex-column">
                            <Col md="1"></Col>
                            <Col md="10">
                                <Button variant="primary" className='w-100' href='/my-account'>
                                    Minhas informações
                                </Button>
                            </Col>
                            <Col md="1"></Col>
                        </Row>
                    </Container>
                </Col>
            </Row>

            <Row>
                <Col>
                    <Container>
                        <Row className="d-flex align-items-center justify-content-center flex-column">
                            <Col md="1"></Col>
                            <Col md="10">
                                <Button variant="primary" className='w-100' href='/my-cars'>
                                    Meus carros
                                </Button>
                            </Col>
                            <Col md="1"></Col>
                        </Row>
                    </Container>
                </Col>
            </Row>

            <Row>
                <Col>
                    <Container>
                        <Row className="d-flex align-items-center justify-content-center flex-column">
                            <Col md="1"></Col>
                            <Col md="10">
                                <Button variant="primary" className='w-100'>
                                    Minha locação
                                </Button>
                            </Col>
                            <Col md="1"></Col>
                        </Row>
                    </Container>
                </Col>
            </Row>

            <Row>
                <Col>
                    <Container>
                        <Row>
                            <Col md="1"></Col>
                            <Col md="10">
                                <Button variant="primary" className='w-100'>
                                    Sair
                                </Button>
                            </Col>
                            <Col md="1"></Col>
                        </Row>
                    </Container>
                </Col>
            </Row>
        </Nav>
    );

} export default LeftAccountBar;