import { useState } from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';

type Props = {
    isHidden: boolean;
}

function RegisterPersonalData({ isHidden }: Props) {

    const [name, setName] = useState('');
    const [nationality, setNationality] = useState('');
    const [cpf, setCPF] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [gender, setGender] = useState('');
    const [password, setPassword] = useState('');


    return (
        <>
            <Container hidden={isHidden}>
                <Row className='pt-5 my-3'>
                    <h3 className='text-light'>Preencha seus dados pessoais nos campos abaixo</h3>
                </Row>
                <Container>
                    <Form className="text-light">
                        <Row>
                            <Col md="6">
                                <Form.Group className="mb-3" controlId="name">
                                    <Form.Label>Nome Completo</Form.Label>
                                    <Form.Control type="text" placeholder="" value={name} onChange={e => setName(e.target.value)} />
                                </Form.Group>
                            </Col>
                            <Col md="3">
                                <Form.Group className="mb-3" controlId="nationality">
                                    <Form.Label>Nacionalidade</Form.Label>
                                    <Form.Control type="text" placeholder="" value={nationality} onChange={e => setNationality(e.target.value)} />
                                </Form.Group>
                            </Col>
                            <Col md="3">
                                <Form.Group className="mb-3" controlId="cpf">
                                    <Form.Label>CPF</Form.Label>
                                    <Form.Control type="text" placeholder="000.000.000-00" value={cpf} onChange={e => setCPF(e.target.value)}/>
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col md="3">
                                <Form.Group className="mb-3" controlId="phone">
                                    <Form.Label>Telefone Celular</Form.Label>
                                    <Form.Control type="text" placeholder="" value={phone} onChange={e => setPhone(e.target.value)}/>
                                </Form.Group>
                            </Col>
                            <Col md="4">
                                <Form.Group className="mb-3" controlId="email">
                                    <Form.Label>E-mail</Form.Label>
                                    <Form.Control type="email" placeholder="" value={email} onChange={e => setEmail(e.target.value)}/>
                                </Form.Group>
                            </Col>
                            <Col md="5">
                                <Form.Group className="mb-3" controlId="gender">
                                    <Row>
                                        <Form.Label className='px-0'>Gênero</Form.Label>
                                    </Row>
                                    <Form.Check
                                        inline
                                        label="Feminino"
                                        name="genderGroup"
                                        type="radio"
                                        id={`female`}
                                        value="Feminino"
                                    />
                                    <Form.Check
                                        inline
                                        label="Masculino"
                                        name="genderGroup"
                                        type="radio"
                                        id={`male`} 
                                        value="Masculino"
                                    />
                                    <Form.Check
                                        inline
                                        label="Outro"
                                        name="genderGroup"
                                        type="radio"
                                        id={`other`} 
                                        value="Outro"
                                    />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col md="3">
                                <Form.Group className="mb-3" controlId="password">
                                    <Form.Label>Senha</Form.Label>
                                    <Form.Control type="password" placeholder="" value={password} onChange={e => setPassword(e.target.value)}/>
                                </Form.Group>
                            </Col>
                            <Col md="3">
                                <Form.Group className="mb-3" controlId="confirmPassword">
                                    <Form.Label>Confirmar Senha</Form.Label>
                                    <Form.Control type="password" placeholder="Password" />
                                </Form.Group>
                            </Col>
                            <Col md="6">
                            </Col>
                        </Row>
                    </Form>
                </Container>
            </Container>
        </>
    )
}

export default RegisterPersonalData;