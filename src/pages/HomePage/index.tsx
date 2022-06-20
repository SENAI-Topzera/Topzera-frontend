import Navbar from 'components/Navbar'
import { Container, Row, Col, Form, Button, Carousel, CarouselItem, Card, InputGroup } from 'react-bootstrap';
import './styles.css';

function HomePage() {

    return (
        <>
            <Navbar />
            <div className='backImg'>
                <Row>
                    <Col md="1"></Col>
                    <Col md="10">
                    <h2 className="text-light text-center mt-2"> Compartilhe destinos e chegue onde precisar!</h2>
                        <Card bg='primary' key='localDate' className="mt-3">
                            <Card.Body>
                                <Row>
                                    <Col md="4">
                                        <Form.Group>
                                            <Form.Label>Localização</Form.Label>
                                            <Form.Control type="text" placeholder="Digite seu estado ou cidade" />
                                        </Form.Group>
                                    </Col>
                                    <Col md="4">
                                        <Form.Group>
                                            <Form.Label>Data de disponibilidade</Form.Label>
                                            <InputGroup className="">
                                                <Form.Control type="date" aria-label="First name" />
                                                <Form.Control type="date" aria-label="Last name" />
                                            </InputGroup>
                                        </Form.Group>
                                    </Col>
                                    <Col md="4" className='d-flex align-items-end justify-content-end flex-column'>
                                        <Button variant="secondary" href='/my-cars' className='w-100'>
                                            Buscar
                                        </Button>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md="1"></Col>
                </Row>
                <Row>
                    <Col md="1"></Col>
                    <Col className="flex-column vh-100 mt-2" md="10">
                        <Carousel>
                            <Carousel.Item className='carousel-item-home testeimg'>
                                <img
                                    className="d-block w-100"
                                    src="https://images2.alphacoders.com/685/685648.jpg"
                                />
                            </Carousel.Item>
                            <Carousel.Item className="carousel-item-home">
                                <img
                                    className="d-block w-100"
                                    src="https://cdn.motor1.com/images/mgl/P3GWZr/s1/2022-honda-civic-si.jpg"
                                />
                            </Carousel.Item>
                            <Carousel.Item className='carousel-item-home'>
                                <img
                                    className="d-block w-100"
                                    src="https://i.gaw.to/content/photos/41/07/410736_Une_Toyota_GR_Corolla_de_250_chevaux_pourrait_venir_ici.jpg"
                                />
                            </Carousel.Item>
                        </Carousel>
                    </Col>
                    <Col md="1"></Col>
                </Row>
            </div>
        </>
    )
}

export default HomePage;