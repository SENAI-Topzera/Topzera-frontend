import React from 'react';
import './styles.css';
import { Container, Row, Col, Card, Button, Nav } from "react-bootstrap";

class leftAccountBar extends React.Component {
    render() {

        return (
            <Nav defaultActiveKey="/home" className="flex-column bg-light vh-100">
                <Row>
                    <Col md="1"></Col>
                    <Col md="10">
                        <Container>
                            <Card className='cardimg mt-2'>
                                <Card.Img className='cardimg' variant="top" src="" />
                            </Card>
                            <Row>
                                <Col>
                                    <h6 className='text-center'>Godofredo da Silva</h6>
                                </Col>
                            </Row>
                        </Container>
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
        )
    }
}

export default leftAccountBar;