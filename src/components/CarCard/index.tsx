import { Car } from '../../types/car';
import { Carousel, Card } from "react-bootstrap";
import './styles.css';

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
            </Carousel>
            <Card.Body>
                <Card.Title style={{ width: '100%' }} className="d-inline-block text-truncate">{car.assembler} {car.model}</Card.Title>
                <Card.Text>
                    {car.description}
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default CarCard;