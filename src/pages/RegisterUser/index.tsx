import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import Navbar from 'components/Navbar'
import SliderStatus from 'components/SliderStatusRegisterUser'
import PersonalDataForm from './personalData';
import CNHForm from './CNH';
import AddressForm from './addressData';
import React from 'react';

interface IState {
    currentForm: number;
}

class registerUser extends React.Component {
    
    state = {
        hideFormPersonalData: false,
        hideFormCNH: true,
        hideFormAddressData: true,
        currentForm: 1
    };
    
    continuar() {
        this.setState(
            () => {           

                console.log("form atual = " + this.state.currentForm)

                this.setState({
                    hideFormPersonalData: true,
                    hideFormCNH: true,
                    hideFormAddressData: true,
                    currentForm: this.state.currentForm + 1
                })

                if (this.state.currentForm == 1) {
                    this.setState({ hideFormPersonalData: false })
                }
                if (this.state.currentForm == 2) {
                    this.setState({ hideFormCNH: false })
                }
                if (this.state.currentForm == 3) {
                    this.setState({ hideFormAddressData: false })
                }
                if (this.state.currentForm >= 4) {                    
                }
            });
    }

    voltar() {
        this.setState(
            () => {           

                console.log("form atual = " + this.state.currentForm)

                this.setState({
                    hideFormPersonalData: true,
                    hideFormCNH: true,
                    hideFormAddressData: true,
                    currentForm: this.state.currentForm - 1
                })

                if (this.state.currentForm == 1) {
                    this.setState({ hideFormPersonalData: false })
                }
                if (this.state.currentForm == 2) {
                    this.setState({ hideFormCNH: false })
                }
                if (this.state.currentForm == 3) {
                    this.setState({ hideFormAddressData: false })
                }
                if (this.state.currentForm <= 1) {                                      
                }
            });
    }

    render() {
        return (
            <>
                <Navbar />
                <PersonalDataForm isHidden={this.state.hideFormPersonalData} />
                <CNHForm isHidden={this.state.hideFormCNH} />
                <AddressForm isHidden={this.state.hideFormAddressData} />
                <Container>
                    <Container>
                        <Row >
                            <Col md="6" className="d-flex flex-row">
                                <Button id="voltarForm" variant="primary" type="button" onClick={() => this.voltar()}>Voltar</Button>
                            </Col>
                            <Col md="6" className="d-flex flex-row-reverse">
                                <Button id="continuarForm" variant="primary" type="button" onClick={() => this.continuar()}>Continuar</Button>
                            </Col>
                        </Row>
                        <SliderStatus  statusID={this.state.currentForm} />
                    </Container>
                </Container>
            </>
        )
    }

}

export default registerUser;