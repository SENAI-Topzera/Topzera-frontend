import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BASE_URL } from '../../utils/requests';
import { Car } from '../../types/car';
import CarCard from 'components/CarCard';
import FilterBar from 'components/Filterbar';
import Navbar from 'components/Navbar'
import { Container, Row, Col } from "react-bootstrap";
//import './styles.css';

function Home() {

    const [cars, setCars] = useState<Car[]>([]);

    useEffect(() => {
        axios.get(`${BASE_URL}/cars`)
            .then(response => {
                const data = response.data as Car[];
                setCars(data);
            });
    }, []);

    return (
        <>
            <Navbar />
            <Row>
                <Col md="3">
                    <FilterBar />
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