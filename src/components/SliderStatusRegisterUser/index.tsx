import { Form, FormCheck } from "react-bootstrap";
import './style.scss';

type Props = {
    statusID: number;
}

function SliderStatus({ statusID }: Props) {

    for (let i = 1; i < 5; i++) {
        document.getElementById(String(i))?.removeAttribute("checked");
    }

    const radioStatus = document.getElementById(String(statusID));
    radioStatus?.setAttribute("checked", "checked");
        
    return (
        <div id="form-wrapper">
            <Form id="form-slider">
                <div id="debt-amount-slider">
                    <FormCheck.Input type="radio" className="input-radio" name="debt-amount" id="1" value="1" disabled/>
                    <Form.Label for="1" data-debt-amount="Dados Pessoais"></Form.Label>
                    <FormCheck.Input type="radio" className="input-radio" name="debt-amount" id="2" value="2" disabled />
                    <Form.Label for="2" data-debt-amount="CNH"></Form.Label>
                    <FormCheck.Input type="radio" className="input-radio" name="debt-amount" id="3" value="3" disabled />
                    <Form.Label for="3" data-debt-amount="Endereço"></Form.Label>
                    <FormCheck.Input type="radio" className="input-radio" name="debt-amount" id="4" value="4" disabled />
                    <Form.Label for="4" data-debt-amount="Conclusão"></Form.Label>
                    <div id="debt-amount-pos"></div>
                </div>
            </Form>
        </div>
    );
} export default SliderStatus;