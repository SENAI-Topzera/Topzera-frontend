import { Car } from '../../types/car';
import { Carousel, Row, Col, Card, Button } from "react-bootstrap";
import { useEffect, useState } from 'react';
import axios from 'axios';
import { BASE_URL } from '../../utils/requests';
import { User } from '../../types/user';
import './styles.css'

type Props = {
    car: Car;
}

function MyCarUse({ car }: Props) {

    const [user, setUser] = useState<User>();
    const [statusVehicle, setStatusVehicle] = useState<String>();
    const carouselItem = [];

    /*
            axios.get(`${BASE_URL}/api/users/${car.userId}`)
        .then(response => {
            const data = response.data as User;
            console.log(data)
            setUser(data);
        });
    */

    carouselItem.push(<Carousel.Item className="carousel-item-mycar">
        <img
            className="d-block w-100"
            src="https://picsum.photos/200/300"// src={carImg}
            alt="slide"
        />
    </Carousel.Item>)

    useEffect(() => {
        if (car.statusAvailability == true) {
            setStatusVehicle("disponivel")
        } else {
            setStatusVehicle("indisponivel")
        }

        axios.get(`${BASE_URL}/api/users/${car.userId}`)
        .then(response => {
            const data = response.data as User;
            console.log(data)
            setUser(data);
        });
    }, []);

    return (
        <Col md="12">
            <Card className='mb-4'>
                <Card.Body>
                    <Row>
                        <Col md="2" className="cardBox p-0">
                            <Carousel fade interval={null} controls={false}>
                                {carouselItem}
                            </Carousel>
                        </Col>
                        <Col md="6">
                            <Row>
                                <Card.Title className="d-inline-block text-truncate fs-5">{car.brand}</Card.Title>
                            </Row>
                            <Row>
                                <Card.Title className="d-inline-block text-truncate fs-5">{car.model}</Card.Title>
                            </Row>
                            <Row>
                                <Card.Title className="d-inline-block text-truncate fs-6">Locador: {user?.name}</Card.Title>
                            </Row>
                            <Row>
                                <Card.Title className="d-inline-block text-truncate fs-6">Status: {statusVehicle}</Card.Title>
                            </Row>
                        </Col>
                        <Col md="2" className="px-1">
                            <Button variant="primary" className='w-100 px-0' href=''>
                                Aceitar
                            </Button>
                        </Col>
                        <Col md="2" className="px-1">
                            <Button variant="primary" className='w-100'>
                                Recusar
                            </Button>
                        </Col>
                        {/* <Col md="3" className="px-1">
                            <Button variant="primary" className='w-100 ' href='/accept-decline'>
                                Validar pendência
                            </Button>
                        </Col>
                        <Col md="2" className="px-1">
                            <Button variant="primary" className='w-100 px-0' href='/register-car'>
                                Editar
                            </Button>
                        </Col>
                        <Col md="2" className="px-1">
                            <Button variant="primary" className='w-100'>
                                Excluir
                            </Button>
                        </Col> */}
                    </Row>

                </Card.Body>
            </Card>
        </Col>
    )
}

export default MyCarUse;