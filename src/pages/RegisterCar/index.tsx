import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import Navbar from 'components/Navbar';
import MainDataCar from './mainDataCar';
import CarOptions from './carOptions';
import UploadFiles from './uploadFiles';
import SelectLocation from './selectLocation';
import { Car } from 'types/car';
import axios from 'axios';
import { BASE_URL, CURRENT_USER } from 'utils/requests';

function RegisterCar() {

    const [car, setCar] = useState<Car>();

    const handleRegister = (event: React.SyntheticEvent) => {
        event.preventDefault();
        console.log("hadleregister")

        var brandText = document.getElementById("brand") as HTMLSelectElement;
        var modelText = document.getElementById("model") as HTMLSelectElement;
        var modelShortText = modelText.options[modelText.selectedIndex].text.split(" ");
        var yearText = document.getElementById("modelYear") as HTMLSelectElement;
        var colorText = document.getElementById("color") as HTMLSelectElement;
        var typeFuelText = document.getElementById("typeFuel") as HTMLSelectElement;
        var typeGearText = document.getElementById("typeGear") as HTMLSelectElement;

        const brand = brandText.options[brandText.selectedIndex].text;
        const model = modelShortText[0];
        const description = modelText.options[modelText.selectedIndex].text;
        const modelYear = yearText.options[yearText.selectedIndex].text;
        const color = colorText.options[colorText.selectedIndex].text;
        const board = document.getElementById("board")?.getAttribute('value');
        const typeFuel = typeFuelText.options[typeFuelText.selectedIndex].text;
        const typeGear = typeGearText.options[typeGearText.selectedIndex].text;
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
            codeRenavam,
            description,
            statusAvailability: true,
            userId: CURRENT_USER
        }

        console.log(dataCar)

        axios.post(`${BASE_URL}/api/cars`, dataCar)
            .then(response => {
                const data = response.data as Car;
                alert('Cadastrado com sucesso!')
                setCar(data);
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
            <Form onSubmit={handleRegister} >
                <Container>
                    {/* DADOS VEICULO */}
                    <MainDataCar />

                    {/* OPCIONAIS VEICULO */}
                    <CarOptions />

                    {/* FOTOS VEICULO */}
                    <UploadFiles />

                    {/* LOCALIZACAO */}
                    <SelectLocation />
                    <Row>
                        <Col xs={9}>
                        </Col>
                        <Col xs={3} className="d-flex flex-row-reverse px-0">
                            <Button id="registerCarForm" className="w-100 mb-5" variant="primary" type="submit">Cadastrar</Button>
                        </Col>
                    </Row>
                </Container>
            </Form>
        </>
    )
} export default RegisterCar;