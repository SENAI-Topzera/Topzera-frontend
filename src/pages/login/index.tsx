import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import './styles.css';

function login() {
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
                                    <Form>
                                        <h3 className='text-light text-center'>Faça o seu login aqui</h3>
                                        <Form.Group className="mb-3">
                                            <Form.Control type="email" placeholder="Email" />
                                        </Form.Group>

                                        <Form.Group>
                                            <Form.Control type="password" placeholder="Senha" />
                                        </Form.Group>
                                        <Form.Group className="mb-3 text-light">
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