import { useState } from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';

type Props = {
    isHidden: boolean;
}

function RegisterAddress({ isHidden }: Props) {

    const [cep, setCEP] = useState('');
    const [logradouro, setLogradouro] = useState('');
    const [numero, setNumero] = useState('');
    const [bairro, setBairro] = useState('');
    const [cidade, setCidade] = useState('');
    const [estado, setEstado] = useState('');

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
                                <Form.Group className="mb-3" controlId="cep">
                                    <Form.Label>CEP</Form.Label>
                                    <Form.Control type="text" placeholder="" value={cep} onChange={e => setCEP(e.target.value)}/>
                                </Form.Group>
                            </Col>
                            <Col md="7">
                                <Form.Group className="mb-3" controlId="logradouro">
                                    <Form.Label>Logradouro</Form.Label>
                                    <Form.Control type="text" placeholder="" value={logradouro} onChange={e => setLogradouro(e.target.value)}/>
                                </Form.Group>
                            </Col>
                            <Col md="2">
                                <Form.Group className="mb-3" controlId="numero">
                                    <Form.Label>Número</Form.Label>
                                    <Form.Control type="number" placeholder="" value={numero} onChange={e => setNumero(e.target.value)}/>
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col md="3">
                                <Form.Group className="mb-3" controlId="bairro">
                                    <Form.Label>Bairro</Form.Label>
                                    <Form.Control type="text" placeholder="" value={bairro} onChange={e => setBairro(e.target.value)}/>
                                </Form.Group>
                            </Col>
                            <Col md="3">
                            <Form.Group className="mb-3" controlId="cidade">
                                    <Form.Label>Cidade</Form.Label>
                                    <Form.Control type="text" placeholder="" value={cidade} onChange={e => setCidade(e.target.value)}/>
                                </Form.Group>
                            </Col>
                            <Col md="3">
                                <Form.Group className="mb-3" controlId="estado_usuario">
                                    <Form.Label>Estado</Form.Label>
                                    <Form.Control type="text" placeholder="FAZER UM SELECT OPTIONS" value={estado} onChange={e => setEstado(e.target.value)}/>
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