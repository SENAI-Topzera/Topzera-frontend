import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Navbar from 'components/Navbar';
import MainDataCar from './mainDataCar';
import CarOptions from './carOptions';
import UploadFiles from './uploadFiles';
import SelectLocation from './selectLocation';

function RegisterCar() {

    useEffect(() => {
        console.log('executa ao iniciar');
    }, []);

    return (
        <>
            <Navbar />
            <Container>
                {/* DADOS VEICULO */}
                <MainDataCar />

                {/* OPCIONAIS VEICULO */}
                <CarOptions />

                {/* FOTOS VEICULO */}
                <UploadFiles/>

                {/* LOCALIZACAO */}
                <SelectLocation/>
            </Container>
        </>
    )
} export default RegisterCar;