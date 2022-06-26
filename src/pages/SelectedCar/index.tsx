import axios from 'axios';
import { useEffect, useState } from "react";
import { Container, Carousel, Row, Col, Button, Card, Form, InputGroup, Ratio } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { Car } from '../../types/car';
import { BASE_URL } from '../../utils/requests';
import LocationData from "./locationData";
import Navbar from 'components/Navbar'
import { Rental } from '../../types/rental';

type Props = {
    id: number;
}

function SelectedCar() {

    let params = useParams();

    const carouselItem = [];
    const [car, setCar] = useState<Car>();
    const [rental, setRental] = useState<Rental>();
    const [pickupDate, setPickupDate] = useState<String>();
    const [returnDate, setReturnDate] = useState<String>();

    useEffect(() => {
        axios.get(`${BASE_URL}/api/cars/${params.id}`)
            .then(response => {
                const data = response.data as Car;
                console.log(data)
                setCar(data);
            });
    }, []);

    const handleConfirm = (event: React.SyntheticEvent) => {
        event.preventDefault();

        var rentalBody = {
            hourValue: 2.55,
            pickupLocation: "SENAI",
            pickupDate: pickupDate,
            returnDate: returnDate,
            carId: car?.id,
            userId: 31
        };

        var carBody = {
            statusAvailability: false
        }

        axios.post(`${BASE_URL}/api/rentals`, rentalBody)
            .then(response => {
                const data = response.data as Rental;
                //setRental(data);
                alert("Locação solicitada")
                console.log(data);
            }).catch(
                function (error) {
                    alert('Erro ao solicitar locação')
                    return Promise.reject(error)
                }
            );

        axios.post(`${BASE_URL}/api/cars/${car?.id}`, carBody)
            .then(response => {
                const data = response.data as Car;
                //setRental(data);
                alert("status alterado")
                console.log(data);
            }).catch(
                function (error) {
                    alert('Erro ao alterar status')
                    return Promise.reject(error)
                }
            );
    }

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
                    <h2 className='text-light'>{car?.description}</h2>
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
                            {car?.modelYear}
                        </Card.Text>
                    </Col>
                    <Col xs={3}>
                        <h6 className='text-light'>Placa</h6>
                        <Card.Text className='text-light'>
                            {car?.board}
                        </Card.Text>
                    </Col>
                    <Col xs={3}>
                        <h6 className='text-light'>Combustivel</h6>
                        <Card.Text className='text-light'>
                            {car?.typeFuel}
                        </Card.Text>
                    </Col>
                    <Col xs={3}>
                        <h6 className='text-light'>Câmbio</h6>
                        <Card.Text className='text-light'>
                            {car?.typeGear}
                        </Card.Text>
                    </Col>
                </Row>
                <Form onSubmit={handleConfirm} >
                    <Row className='pt-5'>
                        <h3 className='text-light'>Selecione e data para pegar o veículo</h3>
                    </Row>
                    <Row>
                        <Card bg='primary' key='localDate' className="mt-3">
                            <Card.Body>
                                <Row className='form-row'>
                                    <Form.Group className="col-md-6">
                                        <Form.Label>Periodo de uso do veículo</Form.Label>
                                        <InputGroup className="">
                                            <Form.Control type="date" id="initData" aria-label="Data Inicial" onChange={e => setPickupDate(e.target.value)} />
                                            <Form.Control type="date" id="finalData" aria-label="Data Final" onChange={e => setReturnDate(e.target.value)} />
                                        </InputGroup>
                                    </Form.Group>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Row>
                    <Row className="my-3">
                        <Col md={6}>
                            <Ratio className='border border-primary border-5 rounded' aspectRatio={'16x9'}>
                                <iframe src="https://maps.google.com/maps?q=senai,%20blumenau&t=&z=13&ie=UTF8&iwloc=&output=embed" className="embed-responsive-item" scrolling="no"></iframe>
                            </Ratio>
                        </Col>
                        <Col md={6}>
                            <Card bg='light' key='primary' className="h-100">
                                <Card.Body>
                                    <Row className='form-row '>
                                        <Form.Group className="col-md-3">
                                            <Form.Label>Valor da FIPE</Form.Label>
                                            <Card.Text className=''>
                                                999,00
                                            </Card.Text>
                                        </Form.Group>
                                        <Form.Group className="col-md-3">
                                            <Form.Label>Valor da Hora</Form.Label>
                                            <Card.Text className=''>
                                                999,00
                                            </Card.Text>
                                        </Form.Group>
                                    </Row>
                                    <Row className='d-flex justify-content-end'>
                                        <Card.Text className="col-md-6 my-3">
                                            <p className='m-0'>0,20% do Valor da FIPE: R$ 69,33</p>
                                            <p className='m-0'>3% de Taxa do aluguel: R$ 2,08</p>
                                            <p className='m-0'>Valor hora: R$ 9,31</p>
                                        </Card.Text>
                                        <Card.Text className="col-md-6 my-3">
                                            <Card.Title className='m-0 fw-bold text-end'>Valor total previsto a pagar</Card.Title>
                                            <p className='m-0 fs-1 fw-bolder text-end'>R$ 99,99</p>
                                        </Card.Text>
                                    </Row>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={9}>
                        </Col>
                        <Col xs={3} className="d-flex flex-row-reverse px-0">
                            <Button id="continuarForm" className="w-100 mb-5" variant="primary" type="submit">Solicitar Locação</Button>
                        </Col>
                    </Row>
                </Form>
            </Container>

        </>
    )

}

export default SelectedCar;