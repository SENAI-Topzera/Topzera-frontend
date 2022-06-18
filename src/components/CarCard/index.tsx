import { Car } from '../../types/car';
import { Carousel, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import './styles.css';

type Props = {
    car: Car;
}

function CarCard({ car }: Props) {

    const carouselItem = [];

    // for (let i = 0; i < car.imgs.length; i++) {
    //     var carImg = car.imgs[i];
        carouselItem.push(<Carousel.Item>
            <img
                className="d-block w-100"
                src="https://picsum.photos/200/300"// src={carImg}
                alt="slide"
            />
        </Carousel.Item>)
    // }

    return (
        <Card className="m-2 bg-light">
            <Carousel fade interval={null}>
                {carouselItem}
            </Carousel>
            <Card.Body>
                <Card.Title style={{ width: '100%' }} className="d-inline-block text-truncate"><Link to={`/car-detail/${car.id_carro}`}>{car.marca} {car.modelo}</Link></Card.Title>
                <Card.Text className="text-uppercase">
                {car.cor} {car.tp_comb} {car.qtd_portas}P {car.tp_cambio}
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default CarCard;