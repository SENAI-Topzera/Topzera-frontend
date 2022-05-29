import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

function CarOptions() {

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        const optionIsSelectedClass = event.currentTarget.classList.contains('btn-primary');
        const optionIsSelected = event.currentTarget.getAttribute("variant");

        if(optionIsSelected === "primary" && optionIsSelectedClass) {
            event.currentTarget.classList.add('btn-light');
            event.currentTarget.classList.remove('btn-primary');
            event.currentTarget.setAttribute("variant", "light")
            
        } else {
            event.currentTarget.setAttribute("variant", "primary")
            event.currentTarget.classList.add('btn-primary');
            event.currentTarget.classList.remove('btn-light');
        }
    }

    useEffect(() => {
        console.log('executa ao iniciar');
    }, []);

    return (
        <>
            <Row className='pt-5 my-3'>
                <h3 className='text-light'>Opcionais do veículo</h3>
            </Row>
            <Container>
                <div className='d-flex flex-wrap justify-content-sm-center mx-5'>
                <Button id="btn-option-1" variant="light" className="btn-sm m-2 fs-6" onClick={handleClick}>+ Ar condicionado</Button>
                <Button id="btn-option-2" variant="light" className="btn-sm m-2 fs-6" onClick={handleClick}>+ Direção hidráulica</Button>
                <Button id="btn-option-3" variant="light" className="btn-sm m-2 fs-6" onClick={handleClick}>+ ABS</Button>
                <Button id="btn-option-4" variant="light" className="btn-sm m-2 fs-6" onClick={handleClick}>+ Trava Elétrica</Button>
                <Button id="btn-option-5" variant="light" className="btn-sm m-2 fs-6" onClick={handleClick}>+ Air bag</Button>
                <Button id="btn-option-6" variant="light" className="btn-sm m-2 fs-6" onClick={handleClick}>+ Teto solar</Button>
                <Button id="btn-option-7" variant="light" className="btn-sm m-2 fs-6" onClick={handleClick}>+ 4x4</Button>
                <Button id="btn-option-8" variant="light" className="btn-sm m-2 fs-6" onClick={handleClick}>+ Ar quente</Button>
                <Button id="btn-option-9" variant="light" className="btn-sm m-2 fs-6" onClick={handleClick}>+ Vidro elétrico</Button>
                <Button id="btn-option-10" variant="light" className="btn-sm m-2 fs-6" onClick={handleClick}>+ Computador de bordo</Button>
                <Button id="btn-option-11" variant="light" className="btn-sm m-2 fs-6" onClick={handleClick}>+ Sensor de ré</Button>
                <Button id="btn-option-12" variant="light" className="btn-sm m-2 fs-6" onClick={handleClick}>+ Rádio</Button>
                </div>
            </Container>
        </>
    )
} export default CarOptions;