import Navbar from 'components/Navbar';
import LeftAccountBar from 'components/LeftAccountBar';
import MyCarUse from 'components/MyCarUse';
import { Container, Row, Col, Card, Button } from "react-bootstrap";

function MyCars() {

    return (
        <>
            <Navbar />
            <Row>
                <Col md="3" className='px-0'>
                    <LeftAccountBar />
                </Col>

                <Col md="9">
                    <Container>
                        <Row >
                            <Row>
                                <Col md="12" className="d-flex flex-row-reverse">
                                    <Button variant="primary" className="mb-2 mt-2" href='/register-car'>
                                        Cadastrar veículo
                                    </Button>
                                </Col>
                            </Row>

                            <Row>
                                <MyCarUse />
                            </Row>
                        </Row>
                    </Container>
                </Col>
            </Row>

        </>
    )
}

export default MyCars;