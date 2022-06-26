import { useEffect, useState } from 'react';
import { Container, Row, Col, Form, Button, FormText } from 'react-bootstrap';
import axios from 'axios';
import { BASE_URL } from '../../utils/requests';
import { User } from '../../types/user';
import { CURRENT_USER } from 'utils/requests';

function RegisterPersonalData() {

    const [user, setUser] = useState<User>();

    useEffect(() => {
        axios.get(`${BASE_URL}/api/users/${CURRENT_USER}`)
            .then(response => {
                const data = response.data as User;
                setUser(data);
            });
    }, []);


    return (
        <>
            <Container>
                <Row className='pt-5 my-3'>
                    <h3 className='text-light'>Preencha seus dados pessoais nos campos abaixo</h3>
                </Row>
                <Container>
                    <Form className="text-light">
                        <Row>
                            <Col md="6">
                                <Form.Group className="mb-3" controlId="name">
                                    <Form.Label>Nome Completo</Form.Label>
                                    <Form.Control type="text" placeholder="" value={user?.name} />
                                </Form.Group>
                            </Col>
                            <Col md="3">
                                <Form.Group className="mb-3" controlId="nationality">
                                    <Form.Label>Nacionalidade</Form.Label>
                                    <Form.Control type="text" placeholder="" value={user?.nationality}/>
                                </Form.Group>
                            </Col>
                            <Col md="3">
                                <Form.Group className="mb-3" controlId="cpf">
                                    <Form.Label>CPF</Form.Label>
                                    <Form.Control type="text" placeholder="000.000.000-00" value={user?.cpf}/>
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col md="3">
                                <Form.Group className="mb-3" controlId="phone">
                                    <Form.Label>Telefone Celular</Form.Label>
                                    <Form.Control type="text" placeholder="" value={user?.phone}/>
                                </Form.Group>
                            </Col>
                            <Col md="4">
                                <Form.Group className="mb-3" controlId="email">
                                    <Form.Label>E-mail</Form.Label>
                                    <Form.Control type="email" placeholder="" value={user?.email}/>
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
                                    <Form.Control type="password" placeholder="" value={user?.password}/>
                                </Form.Group>
                            </Col>
                            <Col md="3">
                                <Form.Group className="mb-3" controlId="confirmPassword">
                                    <Form.Label>Confirmar Senha</Form.Label>
                                    <Form.Control type="password" placeholder="" value={user?.password} />
                                </Form.Group>
                            </Col>
                            <Col md="6">
                            </Col>
                        </Row>
                        <Row>
                            <Col md="12">
                                <Container>
                                    <Row>
                                        <Col md="9">
                                        </Col>
                                        <Col md="2" className="d-grid">
                                            <Button variant="primary" type="button" href='/my-account'>Salvar</Button>
                                        </Col>
                                        <Col md="1">
                                        </Col>
                                    </Row>
                                </Container>
                            </Col>
                        </Row>
                    </Form>
                </Container>
            </Container>
        </>
    )
}

export default RegisterPersonalData;