import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Navbar from 'components/Navbar';
import MainDataCar from './mainDataCar';
import CarOptions from './carOptions';
import UploadFiles from './uploadFiles';

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
                <Row className='pt-5 my-3'>
                    <h3 className='text-light'>Selecione a localização do seu veículo</h3>
                </Row>
                <Container>

                </Container>
            </Container>
        </>
    )
} export default RegisterCar;