import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BASE_URL } from '../../utils/requests';
import { Car } from '../../types/car';
import CarCard from 'components/CarCard';
import { Container } from "react-bootstrap";
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
        <div className={"container"}>
            <div className={"row"}>
                {
                    cars.map(car => (
                        <div key={car.id} className={"col-sm-12 col-md-6 col-lg-4 col-xl-4"}>
                            <CarCard car={car} />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Home;