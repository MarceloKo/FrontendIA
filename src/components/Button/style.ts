import styled from 'styled-components'
import { Button as ButtonAntd } from 'antd'

interface IButton {
	widthcustom?: string
	heigthcustom?: string | undefined
}

export const ButtonCustom = styled(ButtonAntd)<IButton>`
	width: ${(props) => (props.widthcustom ? props.widthcustom : '100%')};
	height: ${(props) => (props.heigthcustom ? props.heigthcustom : '35px')};
	border-radius: 4px;
`
