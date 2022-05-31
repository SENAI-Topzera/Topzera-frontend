import { Car } from '../../types/car';
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import './styles.css'

function AcceptDeclineUser() {

    return (
        <>
            <Col md="12">
                <Card className='mb-4 mt-2'>
                    <Card.Body>
                        <Row>
                            <Col md="2" className="cardBox">

                            </Col>
                            <Col md="5">
                                <Row>
                                    <Card.Title>Carlinhos Maia</Card.Title>
                                </Row>
                                <Row>
                                    <Card.Text>Dia:</Card.Text>
                                </Row>
                                <Row>
                                    <Card.Text>Horário:</Card.Text>
                                </Row>
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
            </Col>
        </>

    )

}

export default AcceptDeclineUser;
