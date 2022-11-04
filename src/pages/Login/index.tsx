import Button from '../../components/Button';
import {BoxLogin, Container} from './style';

export default function Login() {
  return (
    <Container>
        <BoxLogin>
            <p>Logo</p>
        <form>
            <label>Usuário</label>
            <input type="text" />
            <label>Usuário</label>
            <input type="text" />
        </form>

        <p>teste</p>
        <Button name='Entrar' onClick={()=>console.log('sucess')} width={'150px'}/>

        </BoxLogin>
    </Container>
  )
}