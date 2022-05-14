import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import Navbar from 'components/Navbar'
import SliderStatus from 'components/SliderStatusRegisterUser'

function registerUser() {
    return (
        <>
            <Navbar />
            <Container>
                <Row className='pt-5 my-3'>
                    <h3 className='text-light'>Preencha seus dados pessoais nos campos abaixo</h3>
                </Row>
                <Container>
                    <Form className="text-light">
                        <Row>
                            <Col md="6">
                                <Form.Group className="mb-3" controlId="">
                                    <Form.Label>Nome Completo</Form.Label>
                                    <Form.Control type="text" placeholder="" />
                                </Form.Group>
                            </Col>
                            <Col md="3">
                                <Form.Group className="mb-3" controlId="">
                                    <Form.Label>Nacionalidade</Form.Label>
                                    <Form.Control type="text" placeholder="" />
                                </Form.Group>
                            </Col>
                            <Col md="3">
                                <Form.Group className="mb-3" controlId="">
                                    <Form.Label>CPF</Form.Label>
                                    <Form.Control type="email" placeholder="000.000.000-00" />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col md="3">
                                <Form.Group className="mb-3" controlId="">
                                    <Form.Label>Telefone Celular</Form.Label>
                                    <Form.Control type="text" placeholder="" />
                                </Form.Group>
                            </Col>
                            <Col md="4">
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>E-mail</Form.Label>
                                    <Form.Control type="email" placeholder="" />
                                </Form.Group>
                            </Col>
                            <Col md="5">
                                <Form.Group className="mb-3" >
                                    <Row>
                                        <Form.Label className='px-0'>Gênero</Form.Label>
                                    </Row>
                                    <Form.Check
                                        inline
                                        label="Feminino"
                                        name="group1"
                                        type="radio"
                                        id={`inline-radio-1`}
                                    />
                                    <Form.Check
                                        inline
                                        label="Masculino"
                                        name="group1"
                                        type="radio"
                                        id={`inline-radio-2`}
                                    />
                                    <Form.Check
                                        inline
                                        label="Outro"
                                        type="radio"
                                        id={`inline-radio-3`}
                                    />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col md="3">
                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Senha</Form.Label>
                                    <Form.Control type="password" placeholder="" />
                                </Form.Group>
                            </Col>
                            <Col md="3">
                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Confirmar Senha</Form.Label>
                                    <Form.Control type="password" placeholder="Password" />
                                </Form.Group>
                            </Col>
                            <Col md="6">
                            </Col>
                        </Row>
                        <Row >
                            <Col md="12" className="d-flex flex-row-reverse">
                                <Button variant="primary" type="button">Continuar</Button>
                            </Col>
                        </Row>
                    </Form>
                </Container>
                <Row>
                    <Col md="2"></Col>
                    <Col md="8">
                        <SliderStatus/>
                    </Col>
                    <Col md="2"></Col>
                </Row>
            </Container>
        </>
    )
}

export default registerUser;