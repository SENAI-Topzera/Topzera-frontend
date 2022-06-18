import { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import { ReactComponent as SuccessIcon } from './../../assets/icons/success-icon.svg';

type Props = {
    isHidden: boolean;
    isRegistered: boolean;
}

function ConcludedRegister({ isHidden, isRegistered }: Props) {

    const [returnMessage, setReturnMessage] = useState('');


useEffect(() => {
    console.log('status de registro');
    if (isRegistered) {
        setReturnMessage("Cadastro realizado com sucesso!")
    } else {
        setReturnMessage("Falha ao Cadastrar, tente novamente mais tarde.")
    }

}, [isRegistered]);

return (
    <>
        <Container hidden={isHidden}>
            <Row className='pt-5 my-3'>
                <h3 className='text-center text-light'>{returnMessage}</h3>
            </Row>
            <Row className="mb-3">                
                {/* <SuccessIcon /> */}
            </Row>
            <Container>
            </Container>
        </Container>
    </>
)
}

export default ConcludedRegister;