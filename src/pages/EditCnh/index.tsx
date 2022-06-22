import CNHForm from '../RegisterUser/CNH';
import Navbar from 'components/Navbar';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';

function EditCnh() {
    return (
        <>
            <Navbar />
            <Form>
                <Row>
                    <Col md="12">
                        <CNHForm isHidden={false} />
                    </Col>
                </Row>
                <Row>
                    <Col md="12">
                        <Container>
                            <Row>
                                <Col md="9">
                                </Col>
                                <Col md="2" className="d-grid">
                                    <Button variant="primary" type="button" href='/my-account'>Salvar</Button>
                                </Col>
                                <Col md="1">
                                </Col>
                            </Row>
                        </Container>
                    </Col>
                </Row>
            </Form>
        </>
    )
}

export default EditCnh;