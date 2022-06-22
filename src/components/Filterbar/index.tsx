import React from 'react'
import { Form, Nav, InputGroup } from 'react-bootstrap';

class FilterBar extends React.Component {

    // const [isFocus, setIsFocus] = useState(false);

    // const changeToDateType = (event: React.FocusEvent<HTMLInputElement>) => {
    //     setIsFocus(true);
    //     console.log(event);
    // };

    render() {

        return (
            <Nav defaultActiveKey="/home" className="flex-column bg-light vh-100-navbar h-100">
                <Form.Group className="mb-3 mx-3 mt-3" controlId="formBasicPassword">
                    <Form.Label>Localização</Form.Label>
                    <Form.Control type="text" placeholder="Digite seu estado ou cidade" />
                </Form.Group>
                <Form.Group className="mb-3 mx-3">
                    <Form.Label>Data de disponibilidade</Form.Label>
                    <InputGroup>
                        <Form.Control type="date" placeholder='Data Inicial' />
                        <InputGroup.Text></InputGroup.Text>
                        <Form.Control type="date" placeholder="Data Final" />
                    </InputGroup>
                </Form.Group>
                <Form.Group className="mb-3 mx-3">
                    <Form.Label>Tipo</Form.Label>
                    <Form.Select>
                        <option selected disabled>Selecione um tipo de carro</option>
                        <option>Sedan</option>
                        <option>SUV</option>
                        <option>Hatch</option>
                    </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3 mx-3">
                    <Form.Label>Quantidade de lugares</Form.Label>
                    <Form.Select>
                        <option selected disabled>Selecione uma quantidade</option>
                        <option>2</option>
                        <option>4</option>
                        <option>7</option>
                    </Form.Select>
                </Form.Group>
            </Nav>
        )
    }

}

export default FilterBar;