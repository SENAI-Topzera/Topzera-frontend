import axios from "axios";
import React, { useEffect, useState } from "react";
import { Car } from '../../types/car';
import { BASE_URL } from '../../utils/requests';

type Props = {
    //car: Car,
    id: number;
}

function SelectedCar({ id }: Props) {

    const [car, setCar] = useState<Car>();

    useEffect(() => {
        axios.get(`${BASE_URL}/api/cars/${id}`)
            .then(response => {
                const data = response.data as Car;
                console.log(data)
                setCar(data);
            });
    }, []);

    return (
        <p>
            {car?.modelo}
        </p>
    )

}

export default SelectedCar;