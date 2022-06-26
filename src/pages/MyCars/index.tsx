import Navbar from 'components/Navbar';
import LeftAccountBar from 'components/LeftAccountBar';
import MyCarUse from 'components/MyCarUse';
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import axios from 'axios';
import { BASE_URL } from '../../utils/requests';
import { CURRENT_USER } from '../../utils/requests';
import { Car } from '../../types/car';
import { useEffect, useState } from 'react';

function MyCars() {

    const [cars, setCars] = useState<Car[]>([]);

    useEffect(() => {
        axios.get(`${BASE_URL}/api/cars`)
            .then(response => {
                const data = response.data as Car[];
                console.log(data)
                setCars(data);
            });
    }, []);

    const RenderMyCars = (car: Car) => {
        if (car.userId == CURRENT_USER) {
            return (
                <MyCarUse car={car} />
            )
        }
    }

    return (
        <>
            <Navbar />
            <Row className="vh-100-navbar">
                <Col md="3" className='px-0'>
                    <LeftAccountBar />
                </Col>

                <Col md="9">
                    <Container>
                        <Row >
                            <Row>
                                <Col md="12" className="d-flex flex-row-reverse">
                                    <Button variant="primary" className="mb-2 mt-2" href='/register-car'>
                                        Cadastrar veículo
                                    </Button>
                                </Col>
                            </Row>

                            <Row>
                                {cars.map(car => (
                                    RenderMyCars(car)
                                ))}
                                {/* <MyCarUse /> */}
                            </Row>
                        </Row>
                    </Container>
                </Col>
            </Row>

        </>
    )
}

export default MyCars;