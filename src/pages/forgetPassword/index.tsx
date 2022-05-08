import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import './styles.css';

function forgetPassword() {
    return (
        <Container >
            <Row>
                <Col md='3'>
                </Col>
                <Col className='d-flex align-items-center justify-content-center flex-column bg-dark vh-100' md='6'>
                    <Form>
                        <Row>

                            <h3 className='text-light text-center'> Informe o seu e-mail e enviaremos um link para definição de uma nova senha</h3>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Control type="email" placeholder="Email" />
                            </Form.Group>
                        </Row>

                        <Row>
                            <Col>
                                <Button variant="primary" type="submit" className='w-100' href="/login">
                                    Cancelar
                                </Button>
                            </Col>
                            <Col>
                                <Button variant="primary" type="submit" className='w-100'>
                                    Enviar
                                </Button>
                            </Col>
                        </Row>
                    </Form>
                </Col>
                <Col md='3'>
                </Col>
            </Row>
        </Container>

    )
}

export default forgetPassword;