import { Car } from '../../types/car';
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import './styles.css'

function AcceptDeclineUser() {

    return (
        <>
            <Row>
                <h3 className='text-light text-center'>Avaliações</h3>
            </Row>
            <Col md="12" className='p-0'>
                <Card className='mb-4 mt-2'>
                    <Card.Body>
                        <Row>
                            <Col md="2" className="cardText">
                                <Card.Title className='text-truncate fs-5'>Jefferson Maylon Zickuhr</Card.Title>
                            </Col>
                            <Col>
                                <Card.Text>
                                    n Zickuhr
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto, rem nobis quas doloremque ducimus ea accusantium nesciunt possimus quis nemo, at tenetur quasi inventore eveniet ab quod hic maxime. Iste! Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed vel alias, illum deserunt quisquam fugit error? Quia laboriosam porro, quasi ea, ab dolores, eos recusandae velit atqu.
                                </Card.Text>
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
            </Col>
        </>

    )

}

export default AcceptDeclineUser;
