import React, { useEffect } from 'react';
import { Container, Row, Card, Col, Image, Form } from 'react-bootstrap';
import { ReactComponent as TrashIcon } from './../../assets/icons/trash.svg';


function UploadFiles() {

    const selectFiles = (event: React.ChangeEvent<HTMLInputElement>) => {

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
                    Selecione os arquivos<Form.Control type="file" onChange={selectFiles} hidden />
                </Form.Label>
                <Row>
                    <Card>
                        <Row className='g-0'>
                            <Col xs={1} className="">
                                <Image thumbnail={true} className="float-start rounded" src="https://us.123rf.com/450wm/mathier/mathier1905/mathier190500002/134557216-no-thumbnail-image-placeholder-for-forums-blogs-and-websites.jpg" />
                            </Col>
                            <Col xs={10} className="d-flex align-items-center">
                                <Card.Body >
                                    <Card.Text>
                                        <a href="#link1" className="text-secondary">Imagem 01.png</a>
                                    </Card.Text>
                                </Card.Body>
                            </Col>
                            <Col xs={1} className="d-flex align-items-center flex-row-reverse">
                                <TrashIcon />
                            </Col>
                        </Row>
                    </Card>
                </Row>
            </Container>
        </>
    )
} export default UploadFiles;