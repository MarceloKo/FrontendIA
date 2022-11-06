import Button from '../../components/Commons/Button';
import { BoxLogin, Container } from './style';
import { Input } from 'antd';
import imageLogo from "../../assets/logo.png"
import { useNavigate } from "react-router-dom";
import { useContext, useState } from 'react';
import { AuthContext } from '../../context/Auth/AuthContext';
import Alert from '../../components/Commons/Alert';

export default function Login() {
    const auth = useContext(AuthContext);
    const [data, setData] = useState({ email: '', password: '' });
    const navigate = useNavigate();
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setData({ ...data, [e.target.id]: e.target.value });  
    }
    const onSubmit = async () => {
        if(!data.email && !data.password) return Alert({type:'warning',message:'Preencha todos os campos!'});

        const isLogged = await auth.signIn(data.email, data.password);
        if (isLogged) {
            navigate('/dashboard');
            Alert({type:'success',message:'Logado com sucesso!'});
        }else{
            Alert({type:'error',message:'Erro ao logar!'});
        }
    }
    return (
        <Container>
            <BoxLogin>
                <img src={imageLogo} alt="logo" />
                <form>
                    <label htmlFor='email' >Email</label>
                    <Input placeholder="Digite seu email" id='email'  onChange={onChange} type='email'/>
                    
                    <label htmlFor='password'>Senha</label>
                    <Input.Password placeholder="Digite sua senha" id='password' onChange={onChange}/>
                </form>
                <Button name='Entrar' onClick={onSubmit} width={'150px'}/>
            </BoxLogin>
        </Container>
    )
}