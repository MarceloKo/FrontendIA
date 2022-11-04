import { BoxRelatorio, ContainerRelatorio } from "./style";
import { Input, DatePicker } from 'antd'
import Button from "../../../components/Commons/Button";
import { Select } from 'antd';

export default function Relatorio() {
    const { RangePicker } = DatePicker;
    const onChange = (value: string) => {
        console.log(`selected ${value}`);
    };

    const onSearch = (value: string) => {
        console.log('search:', value);
    };

    return (
        <ContainerRelatorio>
            <BoxRelatorio>
                <h1>Relatório</h1>
                <form>
                    <label>Selecione o quarto</label>
                    <Select
                        showSearch
                        placeholder="Quarto"
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
                    <label>Selecione a data</label>
                    <RangePicker placeholder={['Data inicial','Data final']}/>
                    <Button name='Entrar' onClick={() => console.log('Gerar PDF')} width={'150px'} style={{ margin: '10px auto' }} />
                </form>
            </BoxRelatorio>

        </ContainerRelatorio>
    )
}