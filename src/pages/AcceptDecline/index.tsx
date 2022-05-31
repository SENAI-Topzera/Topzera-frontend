import Navbar from 'components/Navbar';
import LeftAccountBar from 'components/LeftAccountBar';
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import AcceptDeclineUser from 'components/AcceptDeclineUser';
import Rating from 'components/Rating';

function AcceptDecline() {

    return (
        <>
            <Navbar />
            <Row>
                <Col md="3" className='px-0'>
                    <LeftAccountBar />
                </Col>
                <Col md="9">
                    <AcceptDeclineUser />
                    <Row>
                        <Rating />
                    </Row>
                    <Row>
                        <Col md="7" className="d-flex flex-row-reverse"></Col>
                        <Col md="2" >
                        <Button variant="primary" href='/my-account' className='w-100'>
                            Recusar
                        </Button>
                        </Col>
                        <Col md="3" className='p-0'>
                        <Button variant="secondary" href='/my-account' className='w-100'>
                            Aceitar
                        </Button>
                        </Col>
                    </Row>
                </Col>

            </Row>
        </>
    )
}

export default AcceptDecline;