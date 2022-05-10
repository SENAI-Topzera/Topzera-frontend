import { Container, Row, Col, Form, Button } from 'react-bootstrap';

function forgetPassword() {
    return (
        <Container >
            <Row>
                <Col md='3'>
                </Col>
                <Col className='d-flex align-items-center justify-content-center flex-column bg-dark vh-100' md='6'>
                    <Form>
                        <Row>

                            <h3 className='text-light text-center'> Informe uma nova senha</h3>
                            <Form.Group className="mb-3 text-light">
                                <Form.Label>Senha</Form.Label>
                                <Form.Control type="password" />
                            </Form.Group>

                            <Form.Group className="mb-3 text-light">
                                <Form.Label>Confirmar Senha</Form.Label>
                                <Form.Control type="password" />
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
                                    Finalizar
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