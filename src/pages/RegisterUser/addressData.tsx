import { Container, Row, Col, Form } from 'react-bootstrap';

type Props = {
    isHidden: boolean;
}

function RegisterAddress({ isHidden }: Props) {
    return (
        <>
            <Container hidden={isHidden}>
                <Row className='pt-5 my-3'>
                    <h3 className='text-light'>Preencha seu endereço nos campos abaixo</h3>
                </Row>
                <Container>
                    <Form className="text-light">
                        <Row>
                            <Col md="3">
                                <Form.Group className="mb-3" controlId="">
                                    <Form.Label>CEP</Form.Label>
                                    <Form.Control type="text" placeholder="" />
                                </Form.Group>
                            </Col>
                            <Col md="7">
                                <Form.Group className="mb-3" controlId="">
                                    <Form.Label>Endereço</Form.Label>
                                    <Form.Control type="text" placeholder="" />
                                </Form.Group>
                            </Col>
                            <Col md="2">
                                <Form.Group className="mb-3" controlId="">
                                    <Form.Label>Número</Form.Label>
                                    <Form.Control type="number" placeholder="" />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col md="3">
                                <Form.Group className="mb-3" controlId="">
                                    <Form.Label>Bairro</Form.Label>
                                    <Form.Control type="text" placeholder="" />
                                </Form.Group>
                            </Col>
                            <Col md="3">
                            <Form.Group className="mb-3" controlId="">
                                    <Form.Label>Cidade</Form.Label>
                                    <Form.Control type="text" placeholder="" />
                                </Form.Group>
                            </Col>
                            <Col md="3">
                                <Form.Group className="mb-3" controlId="">
                                    <Form.Label>Estado</Form.Label>
                                    <Form.Control type="text" placeholder="FAZER UM SELECT OPTIONS" />
                                </Form.Group>
                            </Col>
                        </Row>
                    </Form>
                </Container>
            </Container>
        </>
    )
}

export default RegisterAddress;