import IButton from './IButton'
import { ButtonCustom } from './style'
export default function Button({
	name,
	id,
	disabled,
	style,
	onClick,
	className,
	size,
	isLoading,
	startIcon,
	type,
	typeButton,
	width,
	heigth,
}: IButton) {
	return (
		<ButtonCustom
			id={id}
			type={typeButton || 'default'}
			htmlType={type}
			disabled={disabled}
			size={size}
			loading={isLoading}
			style={style}
			className={className}
			onClick={onClick}
			widthcustom={width}
			icon={startIcon}
			heigthcustom={heigth}
		>
			{name}
		</ButtonCustom>
	)
}
