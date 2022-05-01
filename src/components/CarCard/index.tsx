import React, { useEffect, useState } from 'react';
import { Car } from '../../types/car';
import { Carousel, Card } from "react-bootstrap";
import './styles.css';
import { isNamedExportBindings } from 'typescript';

const carImage = 'https://1.bp.blogspot.com/-m1Jn9m0IAYI/YMEKSZYJmTI/AAAAAAADKic/GL4w5FnKukcJny5mUMormoZj7M_C_8qnACLcBGAsYHQ/s1479/29%2B%25281%2529.jpg';
const carImage2 = 'https://s1.1zoom.me/big3/575/BMW_Tuning_4-Series_Black_Metallic_576020_3840x2160.jpg';

type Props = {
    car: Car;
}

function CarCard({ car }: Props) {

    const carouselItem = [];

    for (let i = 0; i < car.imgs.length; i++) {
        var carImg = car.imgs[i];
        carouselItem.push(<Carousel.Item>
            <img
                className="d-block w-100"
                src={carImg}
                alt="slide"
            />
        </Carousel.Item>)
    }

    return (
        <Card className="m-2 bg-light">
            <Carousel fade interval={null}>
                {carouselItem}
                {/* <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={car.imgs[0]}
                        alt="First slide"
                    />
                </Carousel.Item> */}
            </Carousel>
            {/* <Card.Img variant="top" src={carImage2} /> */}
            <Card.Body>
                <Card.Title style={{ width: '100%' }} className="d-inline-block text-truncate">{car.assembler} {car.model}</Card.Title>
                <Card.Text>
                    {car.description}
                </Card.Text>
            </Card.Body>
        </Card>
        /*<div className={"card-container"}>
            <div className={"card-body"}>
                <div className={"row"}>
                    <div className={"col-12"}>
                        <img src={carImage2} alt="Car image" />
                    </div>
                </div>
                <div className={"row"}>
                    <div className={"col-12 card-info-2"}>
                        <div className={"row"}>
                            <span className={"h3"} >{car.assembler} {car.model}</span>
                        </div>
                        <div className={"row"}>
                            <span>{car.description}</span>
                        </div>
                        <div className={"row"}>
                            <span>{car.year}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>*/
    )
}

export default CarCard;