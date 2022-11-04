import { Body, Card, ContainerInicio, Header, Informations, InformationsRow } from "./style";

export default function Inicio() {
    return (
        <ContainerInicio>
            <Card>
                <Header>
                    <p><b>Quarto 01</b></p>
                    <p style={{color:'red'}}>Ocupado</p>
                </Header>
                <Body>
                    <h3>
                        Ultimos dados
                    </h3>
                    
                    <Informations>
                        <InformationsRow>
                            <p>Médico:</p><p> 19:10:00 - 19:30:00</p>
                        </InformationsRow>
                        <InformationsRow>
                            <p>Enfermeiro:</p><p> 19:40:00 - 19:59:00</p>
                        </InformationsRow>
                        <InformationsRow>
                            <p>Fisioterapeuta:</p><p> 19:20:00 - 19:35:00</p>
                        </InformationsRow>
                        <InformationsRow>
                            <p>Visitante:</p><p> 15:10:00 - 17:30:00</p>
                        </InformationsRow>
                    </Informations>

                </Body>
            </Card>
            <Card>
                <Header>
                    <p><b>Quarto 02</b></p>
                    <p style={{color:'green'}}>Disponivel</p>
                </Header>
                <Body>
                    <h3>Sem dados</h3>
                </Body>
            </Card>
            <Card>
                <Header>
                    <p><b>Quarto 03</b></p>
                    <p style={{color:'green'}}>Disponivel</p>
                </Header>
                <Body>
                    <h3>Sem dados</h3>
                </Body>
            </Card>
        </ContainerInicio>
    )
}