import { Car } from '../../types/car';
import { Carousel, Card } from "react-bootstrap";
import './styles.css';

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