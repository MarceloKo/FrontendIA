import { Card, CardContainer, ContainerGestao } from "./style";
import { Input, Select } from 'antd';
import Button from "../../../components/Commons/Button";
import { quartoDelete, quartoGetAll, quartoPost } from "../../../services/quarto";
import { useEffect, useState } from "react";
import IQuarto from "./interfaces/IQuarto";
import Alert from "../../../components/Commons/Alert";
import ICargo from "./interfaces/ICargo";
import { cargoDelete, cargoGetAll, cargoPost } from "../../../services/cargo";
export default function Gestao() {
    const [quarto, setQuarto] = useState<IQuarto>({ listQuarto: [], quartoSelected: { value: '', label: '' }, quartoInput: 0 });
    const [cargo, setCargo] = useState<ICargo>({ listCargo: [], cargoSelected: { value: '', label: '' }, cargoInput: { name:'',cor:''} });

    useEffect(() => {
        getAllQuartos()
        getAllCargo()
    }, [])

    // QUARTOS
    const getAllQuartos = async () => {
        const data = await quartoGetAll().then((response) => response.data.result.data);

        var listQuarto = data.map((item: any) => {
            return { value: item._id, label: `Quarto ${item.bedroom}` }
        })

        setQuarto({ listQuarto: listQuarto, quartoSelected: { value: '', label: '' }, quartoInput: 0 });

    }
    const onChangeQuarto = (e: React.ChangeEvent<HTMLInputElement>) => {
        setQuarto({ ...quarto, quartoInput: parseInt(e.target.value) });
    }
    const CreateQuarto = async () => {
        quartoPost(quarto.quartoInput).then((res) => {
            if (res) {
                Alert({ type: 'success', message: 'Quarto criado com sucesso!' })
                getAllQuartos()
            } else {
                Alert({ type: 'warning', message: 'Digite o numero do quarto!' })
            }
        })
    }
    const DeleteQuarto = async () => {
        await quartoDelete(quarto.quartoSelected.value).then(() => {
            Alert({ type: 'success', message: 'Quarto deletado com sucesso!' })
            getAllQuartos()

        })
    }


    // CARGO
    const getAllCargo = async () => {
        const data = await cargoGetAll().then((response) => response.data.result.data);

        var listCargo = data.map((item: any) => {
            return { value: item._id, label: `Cargo ${item.name}` }
        })

        setCargo({ listCargo, cargoSelected: { value: '', label: '' }, cargoInput: { name:'',cor:''} });
    }
    const onChangeCargo = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCargo({ ...cargo, cargoInput: { ...cargo.cargoInput, [e.target.id]: e.target.value } });
    }
    const CreateCargo = async () => {
        cargoPost(cargo.cargoInput).then((res) => {
            if (res) {
                Alert({ type: 'success', message: 'cargo criado com sucesso!' })
                getAllCargo()
            } else {
                Alert({ type: 'warning', message: 'Preencha todos os campos!' })
            }
        })
    }
    const DeleteCargo = async () => {
        await cargoDelete(cargo.cargoSelected.value).then((res) => {
            if(res){
                Alert({ type: 'success', message: 'Cargo deletado com sucesso!' })
                getAllCargo()
            }else{
                Alert({ type: 'warning', message: 'Selecione um cargo!' })
            }

        })
    }

    return (
        <ContainerGestao>
            <h2>Quarto</h2>
            <hr />
            <CardContainer>
                <Card>
                    <p>Adicionar</p>
                    <label>N° Quarto</label>
                    <Input placeholder="Quarto" type="number" onChange={onChangeQuarto} value={quarto.quartoInput} />
                    <Button name='Enviar' onClick={CreateQuarto} typeButton="primary" width={'100px'} style={{ marginTop: '10px' }} />

                </Card>
                <Card>
                    <p>Excluir</p>
                    <label>Quarto</label>
                    <Select
                        showSearch
                        placeholder="Selecione o quarto"
                        filterOption={(input, option) =>
                            (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                        }
                        onChange={(_, object: any) => setQuarto({ ...quarto, quartoSelected: object })}
                        value={quarto.quartoSelected.label}
                        options={quarto.listQuarto}
                    />
                    <Button name='Enviar' onClick={DeleteQuarto} typeButton="primary" width={'100px'} style={{ marginTop: '10px' }} />

                </Card>
            </CardContainer>
            <h2>Cargo</h2>
            <hr />
            <CardContainer>
                <Card>
                    <p>Adicionar</p>
                    <label htmlFor="name">Nome</label>
                    <Input placeholder="Nome" id="name" name="name" value={cargo.cargoInput.name} onChange={onChangeCargo}/>
                    <label htmlFor="cor">Cor</label>
                    <Input placeholder="Cor"  id="cor" name="cor" value={cargo.cargoInput.cor} onChange={onChangeCargo}/>
                    <Button name='Enviar' onClick={CreateCargo} typeButton="primary" width={'100px'} style={{ marginTop: '10px' }} />

                </Card>
                <Card>
                    <p>Excluir</p>
                    <label>Cargo</label>
                    <Select
                        showSearch
                        placeholder="Selecione o cargo"
                        optionFilterProp="children"
                        // onChange={onChange}
                        filterOption={(input, option) =>
                            (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                        }
                        options={cargo.listCargo}
                        value={cargo.cargoSelected.label}
                        onChange={(_, object: any) => setCargo({ ...cargo, cargoSelected: object })}
                    />
                    <Button name='Enviar' onClick={DeleteCargo} typeButton="primary" width={'100px'} style={{ marginTop: '10px' }} />

                </Card>
            </CardContainer>
        </ContainerGestao>
    )
}