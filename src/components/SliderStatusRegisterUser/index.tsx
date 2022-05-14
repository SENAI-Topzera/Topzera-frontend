import { Form, Row, ListGroup } from "react-bootstrap";

function SliderStatus() {
    return (
        // <Form.Range />
        <>
            <Row className="range">
                <Form.Range min="1" max="4" value="1" />
            </Row>
            <ListGroup horizontal className="range-labels">
                <ListGroup.Item className="active selected">Dados Pessoais</ListGroup.Item>
                <ListGroup.Item>CNH</ListGroup.Item>
                <ListGroup.Item>Endereço</ListGroup.Item>
                <ListGroup.Item>Conclusão</ListGroup.Item>
            </ListGroup>
        </>
    );
}

export default SliderStatus;