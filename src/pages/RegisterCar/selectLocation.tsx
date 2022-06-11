import React, { useEffect, useState } from 'react';
import { Container, Row, Card, Col, Image, Form, InputGroup } from 'react-bootstrap';


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

            </Container>
        </>
    )
} export default SelectLocation;