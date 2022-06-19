import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Car } from '../../types/car';
import { BASE_URL } from '../../utils/requests';

type Props = {
    //car: Car,
    id: number;
}

function SelectedCar() {

    let params = useParams();

    const [car, setCar] = useState<Car>();

    useEffect(() => {
        axios.get(`${BASE_URL}/api/cars/${params.id}`)
            .then(response => {
                const data = response.data as Car;
                console.log(data)
                setCar(data);
            });
    }, []);

    return (
        <>
        <h2 className='text-center text-light'>{car?.descricao}</h2>
        </>
    )

}

export default SelectedCar;