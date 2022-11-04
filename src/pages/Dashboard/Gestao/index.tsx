import { Card, CardContainer, ContainerGestao } from "./style";
import { Input, Select } from 'antd';
import Button from "../../../components/Commons/Button";
export default function Gestao() {
    const onChange = (value: string) => {
        console.log(`selected ${value}`);
    };

    const onSearch = (value: string) => {
        console.log('search:', value);
    };
    return (
        <ContainerGestao>
            <h2>Quarto</h2>
            <hr />
            <CardContainer>
                <Card>
                    <p>Adicionar</p>
                    <label>N° Quarto</label>
                    <Input placeholder="Quarto" />
                    <Button name='Enviar' onClick={() => console.log('Enviou')} typeButton="primary" width={'100px'} style={{ marginTop: '10px' }} />

                </Card>
                <Card>
                    <p>Excluir</p>
                    <label>Quarto</label>
                    <Select
                        showSearch
                        placeholder="Selecione o quarto"
                        optionFilterProp="children"
                        onChange={onChange}
                        onSearch={onSearch}
                        filterOption={(input, option) =>
                            (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                        }
                        options={[
                            {
                                value: '1',
                                label: 'Quarto 1',
                            },
                            {
                                value: '2',
                                label: 'Quarto 2',
                            },
                            {
                                value: '3',
                                label: 'Quarto 3',
                            },
                        ]}
                    />
                    <Button name='Enviar' onClick={() => console.log('Enviou')} typeButton="primary" width={'100px'} style={{ marginTop: '10px' }} />

                </Card>
            </CardContainer>
            <h2>Cargo</h2>
            <hr />
            <CardContainer>
                <Card>
                    <p>Adicionar</p>
                    <label>Nome</label>
                    <Input placeholder="Nome" />
                    <label>Cor</label>
                    <Input placeholder="Cor" />
                    <Button name='Enviar' onClick={() => console.log('Enviou')} typeButton="primary" width={'100px'} style={{ marginTop: '10px' }} />

                </Card>
                <Card>
                    <p>Excluir</p>
                    <label>Cargo</label>
                    <Select
                        showSearch
                        placeholder="Selecione o cargo"
                        optionFilterProp="children"
                        onChange={onChange}
                        onSearch={onSearch}
                        filterOption={(input, option) =>
                            (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                        }
                        options={[
                            {
                                value: '1',
                                label: 'Cargo 1',
                            },
                            {
                                value: '2',
                                label: 'Cargo 2',
                            },
                            {
                                value: '3',
                                label: 'Cargo 3',
                            },
                        ]}
                    />
                    <Button name='Enviar' onClick={() => console.log('Enviou')} typeButton="primary" width={'100px'} style={{ marginTop: '10px' }} />

                </Card>
            </CardContainer>
        </ContainerGestao>
    )
}