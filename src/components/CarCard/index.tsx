import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BASE_URL } from '../../utils/requests';
import { Car } from '../../types/car';
import { Carousel, Card, OverlayTrigger, Tooltip } from "react-bootstrap";
import { Rental } from 'types/rental';
import { Link } from "react-router-dom";
import './styles.css';

type Props = {
    car: Car;
}

function CarCard({ car }: Props) {


    //const [rental, setRental] = useState<Rental[]>([]);
    const carouselItem = [];

    // for (let i = 0; i < car.imgs.length; i++) {
    //     var carImg = car.imgs[i];
    carouselItem.push(<Carousel.Item className="carousel-item-carcard">
        <img
            className="d-block w-100"
            src="https://picsum.photos/200/300"// src={carImg}
            alt="slide"
        />
    </Carousel.Item>)
    // }

    // useEffect(() => {
    //     axios.get(`${BASE_URL}/api/rentals/car/${car.id}`)
    //         .then(response => {
    //             const data = response.data as Rental[];
    //             console.log(data)
    //             setRental(data);
    //         });
    // }, []);

    /*
    axios.get(`${BASE_URL}/api/rentals/car/${car.id}`)
            .then(response => {
                const data = response.data as Rental;
                console.log(data)
                setRental(data);
            });
*/  
    //if (rental?.accepted == null) {


        return (
            <Card className="m-2 bg-light">
                <Carousel fade interval={null}>
                    {carouselItem}
                </Carousel>
                <Card.Body>
                    <Card.Title style={{ width: '100%' }} className="d-inline-block text-truncate">
                        <Link to={`/car-detail/${car.id}`}>
                            <Card.Link className="link-dark text-decoration-none">{car.brand} {car.model}</Card.Link>
                        </Link>
                    </Card.Title>
                    <OverlayTrigger placement="bottom" overlay={<Tooltip id="car-description">{car.description}</Tooltip>}>
                        <Card.Text className="text-uppercase text-truncate">
                            {car.description}
                        </Card.Text>
                    </OverlayTrigger>
                </Card.Body>
            </Card>
        )
    //}

    //return (<></>);
}

export default CarCard;