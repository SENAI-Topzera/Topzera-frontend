import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';


function UploadFiles() {

    const selectFiles = (event: React.ChangeEvent<HTMLInputElement>) => {
    }

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    }

    useEffect(() => {
        console.log('executa ao iniciar');
    }, []);

    return (
        <>
            <Row className='pt-5 my-3'>
                <h3 className='text-light'>Adicione as fotos do seu veículo</h3>
            </Row>
            <Container>
                <Form.Label className="btn btn-secondary btn-file">
                    Upload<Form.Control type="file" onChange={selectFiles} />
                </Form.Label>

            </Container>
        </>
    )
} export default UploadFiles;