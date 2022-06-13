import React, { useEffect, useState } from 'react';
import { Container, Row, Ratio } from 'react-bootstrap';


function SelectLocation() {

    useEffect(() => {
        console.log('executa ao iniciar');
    }, []);

    return (
        <>
            <Row className='pt-5 my-3'>
                <h3 className='text-light'>Selecione a localização e data para pegar o veículo</h3>
            </Row>
            <Container>
                <Row>
                    <Ratio aspectRatio="21x9">
                        <iframe src="https://maps.google.com/maps?q=senai,%20blumenau&t=&z=13&ie=UTF8&iwloc=&output=embed" scrolling="no"></iframe>
                    </Ratio>
                </Row>
            </Container>
        </>
    )
} export default SelectLocation;