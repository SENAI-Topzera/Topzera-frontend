import { Car } from '../../types/car';
import './styles.css';

const carImage = 'https://1.bp.blogspot.com/-m1Jn9m0IAYI/YMEKSZYJmTI/AAAAAAADKic/GL4w5FnKukcJny5mUMormoZj7M_C_8qnACLcBGAsYHQ/s1479/29%2B%25281%2529.jpg';
const carImage2 = 'https://s1.1zoom.me/big3/575/BMW_Tuning_4-Series_Black_Metallic_576020_3840x2160.jpg';

type Props = {
    car: Car;
}

function CarCard({ car }: Props) {
    return (
        <div className={"card-container"}>
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
        </div>
    )
}

export default CarCard;