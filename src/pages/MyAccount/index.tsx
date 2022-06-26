import Navbar from 'components/Navbar'
import LeftAccountBar from 'components/LeftAccountBar';
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useEffect, useState } from 'react';
import axios from 'axios';
import { BASE_URL } from '../../utils/requests';
import { User } from '../../types/user';
import { CURRENT_USER } from 'utils/requests';

function myAccount() {

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
            <Navbar />
            <Row className="vh-100-navbar">
                <Col md="3" className="px-0">
                    <LeftAccountBar />
                </Col>
                <Col md="9" className="d-flex align-items-center">
                    <Container className=" ">
                        <Row className="d-flex align-items-center justify-content-center flex-column" mb="2">
                            <Row>
                                <Col md="3">
                                    <Button variant="primary" className='w-100 mb-2'>
                                        Informações pessoais
                                    </Button>
                                </Col>
                                <Col md="2">
                                    <Button variant="primary" className='w-100 mb-2' href='/edit-user'>
                                        Editar
                                    </Button>
                                </Col>
                                <Col md="7"></Col>
                            </Row>
                            <Row>
                                <Col md="12">
                                    <Card className='mb-4'>
                                        <Card.Body>
                                            <Row>
                                                <Col md="4">
                                                    <h5 className='text-center'>Nome Completo</h5>
                                                    <Card.Text className='text-center'>
                                                        {user?.name}
                                                    </Card.Text>
                                                </Col>
                                                <Col md="4">
                                                    <h5 className='text-center'>E-mail</h5>
                                                    <Card.Text className='text-center'>
                                                        {user?.email}
                                                    </Card.Text>
                                                </Col>
                                                <Col md="4">
                                                    <h5 className='text-center'>Telefone</h5>
                                                    <Card.Text className='text-center'>
                                                        {user?.phone}
                                                    </Card.Text>
                                                </Col>
                                            </Row>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>

                            <Row>
                                <Col md="3" >
                                    <Button variant="primary" className='w-100 mb-2'>
                                        Informações da CNH
                                    </Button>
                                </Col>
                                <Col md="2">
                                    <Button variant="primary" className='w-100 mb-2' href='/edit-cnh'>
                                        Editar
                                    </Button>
                                </Col>
                                <Col md="7"></Col>
                            </Row>
                            <Row>
                                <Col md="12">
                                    <Card className='mb-4'>
                                        <Card.Body>
                                            <Row>
                                                <Col md="4">
                                                    <h5 className='text-center'>Data de validade</h5>
                                                    <Card.Text className='text-center'>

                                                    </Card.Text>
                                                </Col>
                                            </Row>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>

                            <Row>
                                <Col md="3" >
                                    <Button variant="primary" className='w-100 mb-2'>
                                        Info. do endereço
                                    </Button>
                                </Col>
                                <Col md="2">
                                    <Button variant="primary" className='w-100 mb-2' href='/edit-address'>
                                        Editar
                                    </Button>
                                </Col>
                                <Col md="7"></Col>
                            </Row>
                            <Row>
                                <Col md="12">
                                    <Card>
                                        <Card.Body>
                                            <Row>
                                                <Col md="3">
                                                    <h5 className='text-center'>Logradouro</h5>
                                                    <Card.Text className='text-center'>
                                                        {user?.place}
                                                    </Card.Text>
                                                </Col>
                                                <Col md="3">
                                                    <h5 className='text-center'>Bairro</h5>
                                                    <Card.Text className='text-center'>
                                                        {user?.district}
                                                    </Card.Text>
                                                </Col>
                                                <Col md="3">
                                                    <h5 className='text-center'>Cidade</h5>
                                                    <Card.Text className='text-center'>
                                                        {user?.city}
                                                    </Card.Text>
                                                </Col>
                                                <Col md="3">
                                                    <h5 className='text-center'>CEP</h5>
                                                    <Card.Text className='text-center'>
                                                    {user?.postalCode}
                                                    </Card.Text>
                                                </Col>
                                            </Row>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                        </Row>
                    </Container>
                </Col>
            </Row>
        </>
    )
}

export default myAccount;