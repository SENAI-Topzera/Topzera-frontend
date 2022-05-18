import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import Navbar from 'components/Navbar'
import SliderStatus from 'components/SliderStatusRegisterUser'
import PersonalDataForm from './personalData';
import CNHForm from './CNH';
import AddressForm from './addressData';
import ConcludedRegister from './concluded';
import './style.scss';

function RegisterUser() {

    const [currentForm, setCurrentForm] = useState(1);
    const [hideFormPersonalData, setHideFormPersonalData] = useState(true);
    const [hideFormCNH, setHideFormCNH] = useState(true);
    const [hideFormAddressData, setHideFormAddressData] = useState(true);
    const [hideConcludedRegister, setHideConcludedRegister] = useState(true);

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

            <Container>
                <div id="container-form" className="">
                    <PersonalDataForm isHidden={hideFormPersonalData} />
                    <CNHForm isHidden={hideFormCNH} />
                    <AddressForm isHidden={hideFormAddressData} />
                    <ConcludedRegister isHidden={hideConcludedRegister} />
                </div>
                <Container>
                    <Row hidden={hideConcludedRegister}>
                        <Col md="5">
                        </Col>
                        <Col md="2" className="d-grid">
                            <Button id="voltarForm" variant="primary" type="button">Finalizar</Button>
                        </Col>
                        <Col md="5">
                        </Col>
                    </Row>
                    <Row hidden={!hideConcludedRegister}>
                        <Col md="6" className="d-flex flex-row">
                            <Button id="voltarForm" variant="primary" type="button" onClick={backForm}>Voltar</Button>
                        </Col>
                        <Col md="6" className="d-flex flex-row-reverse">
                            <Button id="continuarForm" variant="primary" type="button" onClick={continueForm}>Continuar</Button>
                        </Col>
                    </Row>
                </Container>
                <SliderStatus statusID={currentForm} />
                <Row className="py-5"></Row>
            </Container>
        </>
    )
} export default RegisterUser;