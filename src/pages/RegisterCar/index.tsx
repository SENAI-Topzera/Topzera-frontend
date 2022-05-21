import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Navbar from 'components/Navbar';
import MainDataCar from './mainDataCar';

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
                <Row className='pt-5 my-3'>
                    <h3 className='text-light'>Opcionais do veículo</h3>
                </Row>
                <Container>
                    
                </Container>

                {/* FOTOS VEICULO */}
                <Row className='pt-5 my-3'>
                    <h3 className='text-light'>Adicione as fotos do seu veículo</h3>
                </Row>
                <Container>
                    
                </Container>

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