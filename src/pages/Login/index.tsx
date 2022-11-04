import Button from '../../components/Commons/Button';
import { BoxLogin, Container } from './style';
import { Input } from 'antd';
import imageLogo from "../../assets/logo.png"
import { useNavigate } from "react-router-dom";

export default function Login() {
    const navigate = useNavigate();
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.value);
    }
    return (
        <Container>
            <BoxLogin>
                <img src={imageLogo} alt="logo" />
                <form>
                    <label>Usuário</label>
                    <Input placeholder="Login"  />
                    
                    <label>Senha</label>
                    <Input.Password placeholder="input password" />
                </form>
                <Button name='Entrar' onClick={() => navigate('/dashboard')} width={'150px'} />
            </BoxLogin>
        </Container>
    )
}