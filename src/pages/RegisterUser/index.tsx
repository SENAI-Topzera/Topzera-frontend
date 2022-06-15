import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import Navbar from 'components/Navbar'
import SliderStatus from 'components/SliderStatusRegisterUser'
import PersonalDataForm from './personalData';
import CNHForm from './CNH';
import AddressForm from './addressData';
import ConcludedRegister from './concluded';
import './style.scss';
import axios from 'axios';
import { User } from 'types/user';

function RegisterUser() {

    const [currentForm, setCurrentForm] = useState(1);
    const [hideFormPersonalData, setHideFormPersonalData] = useState(true);
    const [hideFormCNH, setHideFormCNH] = useState(true);
    const [hideFormAddressData, setHideFormAddressData] = useState(true);
    const [hideConcludedRegister, setHideConcludedRegister] = useState(true);

    const [user, setUser] = useState<User[]>([]);

    const continueForm = (event: React.MouseEvent) => {
        if (currentForm < 4) {
            setCurrentForm(currentForm + 1);
        }
    };

    const backForm = (event: React.MouseEvent) => {
        if (currentForm > 1) {
            setCurrentForm(currentForm - 1);
        }
    };

    const handleRegister = (event: React.SyntheticEvent) => {
        event.preventDefault();

        const name = document.getElementById("name")?.getAttribute('value');
        const nationality = document.getElementById("nationality")?.getAttribute('value');
        const cpf = document.getElementById("cpf")?.getAttribute('value');
        const phone = document.getElementById("phone")?.getAttribute('value');
        const email = document.getElementById("email")?.getAttribute('value');
        const gender = document.querySelector("input[name='genderGroup']:checked")?.getAttribute('value');
        const password = document.getElementById("password")?.getAttribute('value');
        const userImage = "";
        const carImage = "";
        const cnhId = 1;
        const addressId = 1;

        const dataUser = {
            name,
            nationality,
            gender,
            phone,
            email,
            password,
            userImage,
            carImage,
            cnhId,
            addressId
            
        }

        try {
            console.log(dataUser);

            axios.post(`http://localhost:8888/api/users`, dataUser)
            .then(response => {
                const data = response.data as User[];
                setUser(data);
                console.log(data);
            });
        } catch (error) {
            alert("Erro ao cadastrar usuario " + console.error());
        }

    }

    useEffect(() => {
        setHideFormPersonalData(false)
        console.log('effect will run once');
    }, []);

    useEffect(() => {
        console.log('effect will run if current Form has changed');

        setHideFormPersonalData(true);
        setHideFormCNH(true);
        setHideFormAddressData(true);
        setHideConcludedRegister(true);

        switch (currentForm) {
            case 1:
                setHideFormPersonalData(false);
                break;
            case 2:
                setHideFormCNH(false);
                break;
            case 3:
                setHideFormAddressData(false);
                break;
            case 4:
                setHideConcludedRegister(false);
                break;
            default:
                break;
        }
    }, [currentForm]);

    return (
        <>
            <Navbar />
            <Form onSubmit={handleRegister} >
                <Row>
                    <Col md="12">
                        <PersonalDataForm isHidden={hideFormPersonalData} />
                        <CNHForm isHidden={hideFormCNH} />
                        <AddressForm isHidden={hideFormAddressData} />
                        <ConcludedRegister isHidden={hideConcludedRegister} />
                    </Col>
                </Row>
                <Row>
                    <Col md="12">
                        <Container>
                            <Row hidden={hideConcludedRegister}>
                                <Col md="5">
                                </Col>
                                <Col md="2" className="d-grid">
                                    <Button id="voltarForm" variant="primary" type="submit">Finalizar</Button>
                                </Col>
                                <Col md="5">
                                </Col>
                            </Row>
                            <Row hidden={!hideConcludedRegister}>
                                <Col xs={6} className="d-flex flex-row">
                                    <Button id="voltarForm" className="px-3 mx-4" variant="primary" type="button" onClick={backForm}>Voltar</Button>
                                </Col>
                                <Col xs={6} className="d-flex flex-row-reverse">
                                    <Button id="continuarForm" className="px-3 mx-4" variant="primary" type="button" onClick={continueForm}>Continuar</Button>
                                </Col>
                            </Row>
                            <Row>
                                <Col md="12">
                                    <SliderStatus statusID={currentForm} />
                                </Col>
                            </Row>
                        </Container>
                    </Col>
                </Row>
            </Form>
        </>
    )
} export default RegisterUser;