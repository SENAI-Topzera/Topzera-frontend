import { Container, Row} from 'react-bootstrap';
import { ReactComponent as SuccessIcon } from './../../assets/icons/success-icon.svg';

type Props = {
    isHidden: boolean;
}

function ConcludedRegister({ isHidden }: Props) {
    return (
        <>
            <Container hidden={isHidden}>
                <Row className='pt-5 my-3'>
                    <h3 className='text-center text-light'>Cadastro realizado com sucesso!</h3>
                </Row>
                <Row className="mb-3">
                <SuccessIcon />
                </Row>            
                <Container>
                </Container>
            </Container>
        </>
    )
}

export default ConcludedRegister;