import axios from "axios";
import { useEffect, useState } from "react";
import { Container, Carousel, Row, Col, Button, Card } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { Car } from '../../types/car';
import { BASE_URL } from '../../utils/requests';
import LocationData from "./locationData";
import Navbar from 'components/Navbar'

type Props = {
    id: number;
}

function SelectedCar() {

    let params = useParams();

    const carouselItem = [];
    const [car, setCar] = useState<Car>();

    useEffect(() => {
        axios.get(`${BASE_URL}/api/cars/${params.id}`)
            .then(response => {
                const data = response.data as Car;
                console.log(data)
                setCar(data);
            });
    }, []);

    // for (let i = 0; i < car.imgs.length; i++) {
    //     var carImg = car.imgs[i];
    carouselItem.push(<Carousel.Item className="carousel-item-carselected">
        <img
            className="d-block w-100"
            src="https://picsum.photos/600/600"// src={carImg}
            alt="slide"
        />
    </Carousel.Item>)

    return (
        <>
            <Navbar />
            <Container>
                <Row className="mt-5">
                    <h2 className='text-light'>{car?.descricao}</h2>
                    <Col md={8}>
                        <Card className="">
                            {/* h-75 w-100 d-inline-block */}
                            <Carousel className="" fade interval={null}>
                                {carouselItem}
                            </Carousel>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Container>
                            <div className='d-flex flex-wrap'>
                                <Button id="btn-option-01" variant="light" className="btn m-2 fs-6">Ar condicionado</Button>
                                <Button id="btn-option-02" variant="light" className="btn m-2 fs-6">Direção hidráulica</Button>
                                <Button id="btn-option-03" variant="light" className="btn m-2 fs-6">ABS</Button>
                                <Button id="btn-option-04" variant="light" className="btn m-2 fs-6">Trava Elétrica</Button>
                                <Button id="btn-option-05" variant="light" className="btn m-2 fs-6">Air bag</Button>
                                <Button id="btn-option-06" variant="light" className="btn m-2 fs-6">Teto solar</Button>
                                <Button id="btn-option-07" variant="light" className="btn m-2 fs-6">4x4</Button>
                                <Button id="btn-option-08" variant="light" className="btn m-2 fs-6">Ar quente</Button>
                                <Button id="btn-option-09" variant="light" className="btn m-2 fs-6">Vidro elétrico</Button>
                                <Button id="btn-option-10" variant="light" className="btn m-2 fs-6">Computador de bordo</Button>
                                <Button id="btn-option-11" variant="light" className="btn m-2 fs-6">Sensor de ré</Button>
                                <Button id="btn-option-12" variant="light" className="btn m-2 fs-6">Rádio</Button>
                            </div>
                        </Container>
                    </Col>
                </Row>
                <Row className="mt-3">
                    <Col xs={3}>
                        <h6 className='text-light'>Ano</h6>
                        <Card.Text className='text-light'>
                            {car?.ano_modelo}
                        </Card.Text>
                    </Col>
                    <Col xs={3}>
                        <h6 className='text-light'>Placa</h6>
                        <Card.Text className='text-light'>
                        {car?.placa}
                        </Card.Text>
                    </Col>
                    <Col xs={3}>
                        <h6 className='text-light'>Combustivel</h6>
                        <Card.Text className='text-light'>
                        {car?.tp_comb}
                        </Card.Text>
                    </Col>
                    <Col xs={3}>
                        <h6 className='text-light'>Câmbio</h6>
                        <Card.Text className='text-light'>
                        {car?.tp_cambio}
                        </Card.Text>
                    </Col>
                </Row>

                <LocationData />
            </Container>

        </>
    )

}

export default SelectedCar;