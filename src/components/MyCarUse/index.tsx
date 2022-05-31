import { Car } from '../../types/car';
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import './styles.css'

function MyCarUse() {

    return (
        <Col md="12">
            <Card className='mb-4'>
                <Card.Body>
                    <Row>
                        <Col md="2" className="cardBox">

                        </Col>
                        <Col md="3">
                            <Row>
                                <Card.Title className="d-inline-block text-truncate fs-5">Volkswagen</Card.Title>
                            </Row>
                            <Row>
                                <Card.Title className="d-inline-block text-truncate fs-5">T-Cross</Card.Title>
                            </Row>
                            <Row>
                                <Card.Title className="d-inline-block text-truncate fs-6">Locador: </Card.Title>
                            </Row>
                            <Row>
                                <Card.Title className="d-inline-block text-truncate fs-6">Status: </Card.Title>
                            </Row>
                        </Col>
                        <Col md="3" className="px-1">
                            <Button variant="primary" className='w-100 ' href='/'>
                                Validar pendência
                            </Button>
                        </Col>
                        <Col md="2" className="px-1">
                            <Button variant="primary" className='w-100 px-0' href='/'>
                                Editar
                            </Button>
                        </Col>
                        <Col md="2" className="px-1">
                            <Button variant="primary" className='w-100' href='/'>
                                Excluir
                            </Button>
                        </Col>
                    </Row>

                </Card.Body>
            </Card>
        </Col>
    )
}

export default MyCarUse;