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
import { BASE_URL } from 'utils/requests';

function RegisterUser() {

    const [currentForm, setCurrentForm] = useState(1);
    const [hideFormPersonalData, setHideFormPersonalData] = useState(true);
    const [hideFormCNH, setHideFormCNH] = useState(true);
    const [hideFormAddressData, setHideFormAddressData] = useState(true);
    const [hideConcludedRegister, setHideConcludedRegister] = useState(true);
    const [hideContinueButton, setHideContinueButton] = useState(true);
    const [registered, setRegistered] = useState(false);

    const [user, setUser] = useState<User[]>([]);

    const continueButton = document.getElementById("continuarForm");
    const submitButton = document.getElementById("submitForm");

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
        const phone = document.getElementById("phone")?.getAttribute('value');
        const email = document.getElementById("email")?.getAttribute('value');
        const gender = document.querySelector("input[name='genderGroup']:checked")?.getAttribute('value');
        const password = document.getElementById("password")?.getAttribute('value');
        const cpf = document.getElementById("cpf")?.getAttribute('value');
        const postalCode = document.getElementById("cep")?.getAttribute('value');
        const place = document.getElementById("logradouro")?.getAttribute('value');
        const number = document.getElementById("numero")?.getAttribute('value');
        const district = document.getElementById("bairro")?.getAttribute('value');
        const city = document.getElementById("cidade")?.getAttribute('value');
        const state = document.getElementById("estado_usuario")?.getAttribute('value');

        const dataUser = {
            name,
            nationality,
            gender,
            phone,
            email,
            password,
            cpf,
            postalCode,
            place,
            number,
            district,
            city,
            state            
        }

        try {
            console.log(dataUser);

            axios.post(`${BASE_URL}/api/users`, dataUser)
            .then(response => {
                const data = response.data as User[];
                setUser(data);
                console.log(data);
                setRegistered(true);
            });
        } catch (error) {
            setRegistered(false);
            alert("Erro ao cadastrar usuario " + console.error());
        }

    }

    useEffect(() => {
        try {
            
            axios.post(`${BASE_URL}/api/cnh`, "")
            .then(response => {
                const data = response.data as User[];
                setUser(data);
                console.log(data);
                setRegistered(true);
            });
        } catch (error) {
            setRegistered(false);
            alert("Erro ao cadastrar usuario " + console.error());
        }

    }, [user])

    useEffect(() => {
        setHideFormPersonalData(false);
        //console.log('effect will run once');
    }, []);

    useEffect(() => {
        //console.log('effect will run if current Form has changed');
        setHideFormPersonalData(true);
        setHideFormCNH(true);
        setHideFormAddressData(true);
        setHideConcludedRegister(true);
        setHideContinueButton(true);

        if(currentForm >= 3) {    
            continueButton?.parentElement?.classList.remove('col-6', 'd-flex', 'flex-row-reverse');
            submitButton?.parentElement?.classList.add('col-6', 'd-flex', 'flex-row-reverse');
        } else if (currentForm < 3) {
            submitButton?.parentElement?.classList.remove('col-6', 'd-flex', 'flex-row-reverse');
            continueButton?.parentElement?.classList.add('col-6', 'd-flex', 'flex-row-reverse');
            
        }

        switch (currentForm) {
            case 1:
                setHideFormPersonalData(false);
                break;
            case 2:
                setHideFormCNH(false);
                break;
            case 3:
                setHideFormAddressData(false);
                setHideContinueButton(false)
                break;
            case 4:
                setHideConcludedRegister(false);
                setHideContinueButton(false)
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
                        <ConcludedRegister isHidden={hideConcludedRegister} isRegistered={registered}/>
                    </Col>
                </Row>
                <Row>
                    <Col md="12">
                        <Container>
                            <Row hidden={hideConcludedRegister}>
                                <Col md="5">
                                </Col>
                                <Col md="2" className="d-grid">
                                    <Button id="finalizarForm" variant="primary" type="button">Finalizar</Button>
                                </Col>
                                <Col md="5">
                                </Col>
                            </Row>
                            <Row >
                                <Col  xs={6} className="d-flex flex-row">
                                    <Button hidden={!hideConcludedRegister} id="voltarForm" className="px-3 mx-4" variant="primary" type="button" onClick={backForm}>Voltar</Button>
                                </Col>
                                <Col hidden={!hideContinueButton} xs={6} className="d-flex flex-row-reverse">
                                    <Button id="continuarForm" className="px-3 mx-4" variant="primary" type="button" onClick={continueForm}>Continuar</Button>
                                </Col>
                                <Col  xs={6} className="d-flex flex-row-reverse">
                                    <Button  hidden={hideFormAddressData} id="submitForm" className="px-3 mx-4" variant="primary" type="submit" onClick={continueForm}>Cadastrar</Button>
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