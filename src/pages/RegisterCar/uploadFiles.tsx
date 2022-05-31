import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';


function UploadFiles() {

    const selectFiles = (event: React.ChangeEvent<HTMLInputElement>) => {
        let images: string[] = [];
        // for (let i = 0; i < event.target?.files?.length; i++) {
        //     //images.push(URL.createObjectURL()) //event.currentTarget.files[i]
        // }

        const [selectedFiles, setSelectedFiles] = useState(event.currentTarget.files);
        const [previewImages, setPreviewImages] = useState(images);
        const [progressInfos, setProgressInfos] = useState([]);
        const [message, setMessage] = useState([]);
        const [imageInfos, setImageInfos] = useState([]);
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