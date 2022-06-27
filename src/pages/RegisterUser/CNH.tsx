import { useState } from 'react';
import { Container, Row, Col, Form, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { ReactComponent as InfoIcon } from './../../assets/icons/info-circle.svg';

type Props = {
    isHidden: boolean;
}

function RegisterCNH({ isHidden }: Props) {

    const [rg, setRG] = useState('');
    const [data_nasc, setDataNasc] = useState('');
    const [num_registro, setNumRegistro] = useState('');
    const [num_cnh, setNumCNH] = useState('');
    const [data_validade, setDatavalidade] = useState('');
    const [estado, setEstadoCNH] = useState('');

    return (
        <>
            <Container hidden={isHidden}>
                <Row className='pt-5 my-3'>
                    <h3 className='text-light'>Preencha os dados da sua CNH nos campos abaixo</h3>
                </Row>
                <Container>
                    <Form className="text-light">
                        <Row>
                            <Col md="3">
                                <Form.Group className="mb-3" controlId="rg">
                                    <Form.Label>RG</Form.Label>
                                    <Form.Control type="text" placeholder="" value={rg} onChange={e => setRG(e.target.value)}/>
                                </Form.Group>
                            </Col>
                            <Col md="3">
                                <Form.Group className="mb-3" controlId="data_nasc">
                                    <Form.Label>Data de Nascimento</Form.Label>
                                    <Form.Control type="date" placeholder="" value={data_nasc} onChange={e => setDataNasc(e.target.value)}/>
                                </Form.Group>
                            </Col>
                            {/* <Col md="6">
                                <Form.Group className="mb-3" controlId="api_ocr">
                                    <Form.Label>Preenchimento automático</Form.Label>
                                    <Form.Control type="" placeholder="TROCAR INPUT POR UM BOTÃO QUE PEGA FOTO" />
                                </Form.Group>
                            </Col> */}
                        </Row>
                        <Row>
                            <Col md="3">
                                <Form.Group className="mb-3" controlId="num_registro">
                                    <Form.Label>Número do Registro
                                        <OverlayTrigger placement="right" overlay={<Tooltip id="tooltip-registro">Informe o número do registro da sua CNH</Tooltip>}>
                                            <span className="px-1">< InfoIcon /></span>
                                        </OverlayTrigger>
                                    </Form.Label>
                                    <Form.Control type="text" placeholder="" value={num_registro} onChange={e => setNumRegistro(e.target.value)}/>
                                </Form.Group>
                            </Col>
                            <Col md="3">
                            <Form.Group className="mb-3" controlId="num_cnh">
                                    <Form.Label>Número da CNH
                                        <OverlayTrigger placement="right" overlay={<Tooltip id="tooltip-registro">número na lateral da sua CNH</Tooltip>}>
                                            <span className="px-1">< InfoIcon /></span>
                                        </OverlayTrigger>
                                    </Form.Label>
                                    <Form.Control type="text" placeholder="" value={num_cnh} onChange={e => setNumCNH(e.target.value)}/>
                                </Form.Group>
                            </Col>
                            <Col md="3">
                                <Form.Group className="mb-3" controlId="data_validade">
                                    <Form.Label>Data de Validade</Form.Label>
                                    <Form.Control type="date" placeholder="" value={data_validade} onChange={e => setDatavalidade(e.target.value)}/>
                                </Form.Group>
                            </Col>
                            <Col md="3">
                                <Form.Group className="mb-3" controlId="estado_cnh">
                                    <Form.Label>Estado</Form.Label>
                                    <Form.Control type="text" placeholder="" value={estado} onChange={e => setEstadoCNH(e.target.value)}/>
                                </Form.Group>
                            </Col>
                        </Row>
                    </Form>
                </Container>
            </Container>
        </>
    )
}

export default RegisterCNH;