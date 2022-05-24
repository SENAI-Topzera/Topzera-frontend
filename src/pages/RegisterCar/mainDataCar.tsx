import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Form, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { ReactComponent as InfoIcon } from './../../assets/icons/info-circle.svg';
import { BrandCar } from '../../types/brandCar';
import { ModelCar } from '../../types/modelCar';
import { YearCar } from '../../types/yearCar';
import axios from 'axios';

function CarMainData() {

    const [brands, setBrands] = useState<BrandCar[]>([]);
    const [models, setModels] = useState<ModelCar[]>([]);
    const [yearsCar, setYears] = useState<YearCar[]>([]);

    const [idMarca, setMarca] = useState('');
    const [idModelo, setModelo] = useState('');
    const [ano, setAno] = useState('');
    const [combustivel, setCombustivel] = useState('');

    const RenderAno = () => {
        try {      
            return (yearsCar?.map((year, index) => (
                <option key={index} value={year.Value}>{year.Label}</option>
            )))
        } catch (error) {
        }
    }

    const brandBody = {
        codigoTabelaReferencia: 270,
        codigoTipoVeiculo: 1
    };

    const headers = {
        'chave': '$2y$10$8IAZn7HKq7QJWbh37N3GOOeRVv'
    };

    useEffect(() => {

    }, [yearsCar])

    useEffect(() => {
        axios.post(`https://fipe.contrateumdev.com.br/api/ConsultarMarcas`, brandBody, { headers })
            .then(response => {
                const data = response.data as BrandCar[];
                setBrands(data);
                console.log(data);
            });
    }, []);

    useEffect(() => {
        var modelBody = {
            codigoTabelaReferencia: 231,
            codigoTipoVeiculo: 1,
            codigoMarca: idMarca
        };

        axios.post(`https://fipe.contrateumdev.com.br/api/ConsultarModelos`, modelBody, { headers })
            .then(response => {
                const data = response.data.Modelos as ModelCar[];
                setModels(data);
                console.log(data);
            });
    }, [idMarca]);

    useEffect(() => {
        var yearBody = {
            codigoTabelaReferencia: 231,
            codigoTipoVeiculo: 1,
            codigoMarca: idMarca,
            codigoModelo: idModelo
        };

        axios.post(`https://fipe.contrateumdev.com.br/api/ConsultarAnoModelo`, yearBody, { headers })
            .then(response => {
                const data = response.data as YearCar[];
                setYears(data);
                console.log(data);
            });

    }, [idModelo]);

    useEffect(() => {
        setCombustivel(ano.slice(5, 100));
    }, [ano])

    //{
    //    const data = response.data as ModelCar[];
    //   setModels(data);
    //}

    // useEffect(() => {
    //     console.log('executa ao iniciar');
    // }, []);

    return (
        <>
            {/* DADOS VEICULO */}
            <Row className='pt-5 my-3'>
                <h3 className='text-light'>Preencha os dados do seu veículo</h3>
            </Row>
            <Container>
                <Form className="text-light">
                    <Row>
                        <Col md="3">
                            <Form.Group className="mb-3" controlId="">
                                <Form.Label>Marca</Form.Label>
                                <Form.Select aria-label="Marca" defaultValue={idMarca} onBlur={e => setMarca(e.target.value)}>
                                    <option disabled selected>Selecione</option>
                                    {brands?.map((brand, index) => (
                                        <option key={index} value={brand.Value}>{brand.Label}</option>
                                    ))}
                                </Form.Select>
                            </Form.Group>
                        </Col>
                        <Col md="6">
                            <Form.Group className="mb-3" controlId="">
                                <Form.Label>Modelo</Form.Label>
                                <Form.Select aria-label="Modelo" value={idModelo} onChange={e => setModelo(e.target.value)}>
                                    <option disabled selected>Selecione</option>
                                    {models?.map((model, index) => (
                                        <option key={index} value={model.Value}>{model.Label}</option>
                                    ))}
                                </Form.Select>
                            </Form.Group>
                        </Col>
                        <Col md="3">
                            <Form.Group className="mb-3" controlId="">
                                <Form.Label>Ano do Modelo</Form.Label>
                                <Form.Select aria-label="Ano do Modelo" value={ano} onChange={e => setAno(e.target.value)}>
                                    <option disabled selected>Selecione</option>
                                    {RenderAno()}
                                </Form.Select>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col md="3">
                            <Form.Group className="mb-3" controlId="">
                                <Form.Label>Cor</Form.Label>
                                <Form.Select aria-label="Cor">
                                    <option disabled >Selecione</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </Form.Select>
                            </Form.Group>
                        </Col>
                        <Col md="3">
                            <Form.Group className="mb-3" controlId="">
                                <Form.Label>Placa</Form.Label>
                                <Form.Control type="text" placeholder="" />
                            </Form.Group>
                        </Col>
                        <Col md="3">
                            <Form.Group className="mb-3" controlId="">
                                <Form.Label>Combustível usado</Form.Label>
                                <Form.Select aria-label="Combustível usado">
                                    <option disabled >Selecione</option>
                                    <option value="1">GNV</option>
                                    <option value="2">{combustivel}</option>
                                </Form.Select>
                            </Form.Group>
                        </Col>
                        <Col md="3">
                            <Form.Group className="mb-3" controlId="">
                                <Form.Label>Câmbio</Form.Label>
                                <Form.Select aria-label="Câmbio">
                                    <option disabled >Selecione</option>
                                    <option value="1">Manual</option>
                                    <option value="2">Automatico</option>
                                </Form.Select>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col md="3">
                            <Form.Group className="mb-3" controlId="">
                                <Form.Label>Quantidade de Portas</Form.Label>
                                <Form.Control type="number" min="1" placeholder="" />
                            </Form.Group>
                        </Col>
                        <Col md="3">
                            <Form.Group className="mb-3" controlId="">
                                <Form.Label>Capacidade de Pessoas</Form.Label>
                                <Form.Control type="number" min="1" placeholder="" />
                            </Form.Group>
                        </Col>
                        <Col md="3">
                            <Form.Group className="mb-3" controlId="">
                                <Form.Label>Capacidade de Bagagem</Form.Label>
                                <Form.Select aria-label="Capacidade de Bagagem">
                                    <option disabled >Selecione</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </Form.Select>
                            </Form.Group>
                        </Col>
                        <Col md="3">
                            <Form.Group className="mb-3" controlId="">
                                <Form.Label>Número do Registro
                                    <OverlayTrigger placement="right" overlay={<Tooltip id="tooltip-registro">Informe o número do registro do veículo</Tooltip>}>
                                        <span className="px-1">< InfoIcon /></span>
                                    </OverlayTrigger>
                                </Form.Label>
                                <Form.Control type="text" placeholder="" />
                            </Form.Group>
                        </Col>
                    </Row>
                </Form>
            </Container>
        </>
    )
} export default CarMainData;