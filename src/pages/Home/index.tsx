import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BASE_URL } from '../../utils/requests';
import { Car } from '../../types/car';
import CarCard from 'components/CarCard';
import { Container, Row, Col, Nav, Form, Placeholder } from "react-bootstrap";
//import './styles.css';

function Home() {

    const [cars, setCars] = useState<Car[]>([]);
    const [isFocus, setIsFocus] = useState(false);

    useEffect(() => {
        axios.get(`${BASE_URL}/cars`)
            .then(response => {
                const data = response.data as Car[];
                setCars(data);
            });
    }, []);

    const changeToDateType = (event: React.FocusEvent<HTMLInputElement>) => {
        setIsFocus(true);
        console.log(event);
    };

    return (
        <>
            <Row>
                <Col md="3">
                    <Nav defaultActiveKey="/home" className="flex-column bg-light vh-100">
                        <Form.Group className="mb-3 mx-3 mt-3" controlId="formBasicPassword">
                            <Form.Label>Localização</Form.Label>
                            <Form.Control type="text" placeholder="Digite seu estado ou cidade" />
                        </Form.Group>
                        <Form.Group className="mb-3 mx-3" controlId="formBasicPassword">
                            <Form.Label>Data de disponibilidade</Form.Label>
                            <Row>
                                <Col xs="6" className="px-0">
                                    <Form.Control type="text" placeholder='Data Inicial' onFocus={changeToDateType}/>
                                </Col>
                                <Col xs="6">
                                    <Form.Control type="date" placeholder="Data Final" />
                                </Col>
                            </Row>
                        </Form.Group>
                        <Form.Group className="mb-3 mx-3">
                            <Form.Label>Tipo</Form.Label>
                            <Form.Select>
                            <option selected disabled>Selecione um tipo de carro</option>
                                <option>Sedan</option>
                                <option>SUV</option>
                                <option>Hatch</option>
                            </Form.Select>
                        </Form.Group>
                        <Form.Group className="mb-3 mx-3">
                            <Form.Label>Quantidade de lugares</Form.Label>
                            <Form.Select>
                                <option selected disabled>Selecione uma quantidade</option>
                                <option>2</option>
                                <option>4</option>
                                <option>7</option>
                            </Form.Select>
                        </Form.Group>
                    </Nav>
                </Col>
                <Col md="9">
                    <Container className='my-4'>
                        <Row xs={1} md={3} className="g-1">
                            {cars.map(car => (
                                <Col key={car.id}>
                                    <CarCard car={car} />
                                </Col>
                            ))}
                        </Row>
                    </Container>
                </Col>
            </Row>
        </>

    )
}

export default Home;