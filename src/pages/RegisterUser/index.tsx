import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import Navbar from 'components/Navbar'
import SliderStatus from 'components/SliderStatusRegisterUser'
import PersonalDataForm from './personalData';
import CNHForm from './CNH';
import AddressForm from './addressData';
import React, { useEffect, useState } from 'react';

// interface IState {
//     currentForm: number;
// }

class registerUser extends React.Component {

    state = {
        hideFormPersonalData: false,
        hideFormCNH: true,
        hideFormAddressData: true,
        currentForm: 1
    };

    navigateForm = () => {

        this.state.hideFormPersonalData = true;
        this.state.hideFormCNH = true;
        this.state.hideFormAddressData = true;

        switch (this.state.currentForm) {
            case 1:
                this.state.hideFormPersonalData = false;
                alert("ativa Dados Pessoais")
                break;
            case 2:
                this.state.hideFormCNH = false;
                alert("ativa CNH")
                break;
            case 3:
                this.state.hideFormAddressData = false;
                alert("ativa Endereco")
                break;
            case 4:
                break;
            default:
                break;
        }
    }

    continue = () => {
        if (this.state.currentForm < 4) {
            this.setState({ currentForm: this.state.currentForm + 1 }, () => {
                this.navigateForm();
            });
        }
    }

    back = () => {
        if (this.state.currentForm > 1) {
            this.setState({ currentForm: this.state.currentForm - 1 }, () => {
                this.navigateForm();
            })
        }
    }

    render() {

        // useEffect(() => {
        //     console.log('hello world');
        // }, []);

        return (
            <>
                <Navbar />
                {/* <PersonalDataForm isHidden={!this.state.hideFormPersonalData} /> */}
                <CNHForm isHidden={this.state.hideFormCNH} />
                {/* k<AddressForm isHidden={!this.state.hideFormAddressData} /> */}
                <Container>
                    <Container>
                        <Row >
                            <Col md="6" className="d-flex flex-row">
                                <Button id="voltarForm" variant="primary" type="button" onClick={this.back}>Voltar</Button>
                            </Col>
                            <Col md="6" className="d-flex flex-row-reverse">
                                <Button id="continuarForm" variant="primary" type="button" onClick={this.continue}>Continuar</Button>
                            </Col>
                        </Row>
                        <Row><p className='text-light'>{this.state.currentForm}</p></Row>
                        <SliderStatus statusID={this.state.currentForm} />
                    </Container>
                </Container>
            </>
        )
    }

}

export default registerUser;