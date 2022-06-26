import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import Navbar from 'components/Navbar';
import MainDataCar from './mainDataCar';
import CarOptions from './carOptions';
import UploadFiles from './uploadFiles';
import SelectLocation from './selectLocation';
import { Car } from 'types/car';
import axios from 'axios';
import { BASE_URL } from 'utils/requests';

function RegisterCar() {

    const [car, setCar] = useState<Car>();

    const handleRegister = (event: React.SyntheticEvent) => {
        event.preventDefault();
        console.log("hadleregister")

        const brand = document.getElementById("brand")?.getAttribute('value');
        const model = document.getElementById("model")?.getAttribute('value');
        const modelYear = document.getElementById("modelYear")?.getAttribute('value');
        const color = document.getElementById("color")?.getAttribute('value');
        const board = document.getElementById("board")?.getAttribute('value');
        const typeFuel = document.getElementById("typeFuel")?.getAttribute('value');
        const typeGear = document.getElementById("typeGear")?.getAttribute('value');
        const numberDoors = document.getElementById("numberDoors")?.getAttribute('value');
        const numberAccents = document.getElementById("numberAccents")?.getAttribute('value');
        const numberBaggage = document.getElementById("numberBaggage")?.getAttribute('value');
        const codeRenavam = document.getElementById("codeRenavam")?.getAttribute('value');

        const dataCar = {
            brand,
            model,
            modelYear,
            color,
            board,
            typeFuel,
            typeGear,
            numberDoors,
            numberAccents,
            numberBaggage,
            codeRenavam
        }

        axios.post(`${BASE_URL}/api/cars`, dataCar)
            .then(response => {
                const data = response.data as Car;
                console.log(data);
                //setCar(data);
            }).catch(
                function (error) {
                    alert('Erro ao cadastrar')
                    return Promise.reject(error)
                }
            );

    }

    return (
        <>
            <Navbar />
            <Container>
                <Form onSubmit={handleRegister} >
                    {/* DADOS VEICULO */}
                    <MainDataCar />

                    {/* OPCIONAIS VEICULO */}
                    <CarOptions />

                    {/* FOTOS VEICULO */}
                    <UploadFiles />

                    {/* LOCALIZACAO */}
                    <SelectLocation />
                </Form>
                <Row>
                    <Col xs={9}>
                    </Col>
                    <Col xs={3} className="d-flex flex-row-reverse px-0">
                        <Button id="continuarForm" className="w-100 mb-5" variant="primary" type="submit" href='#'>Cadastrar</Button>
                    </Col>
                </Row>
            </Container>
        </>
    )
} export default RegisterCar;