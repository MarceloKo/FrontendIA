export default interface IButton {
	id?: string
	name: string
	width?: string | undefined
	type?: 'button' | 'submit' | 'reset' | undefined
	typeButton?: 'dashed' | 'primary' | 'default' | 'ghost' | 'link' | 'text' | undefined
	disabled?: boolean
	className?: string
	size?: 'small' | 'middle' | 'large' | undefined
	isLoading?: boolean
	onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
	style?: object
	startIcon?: React.ReactNode
	heigth?: string
}
