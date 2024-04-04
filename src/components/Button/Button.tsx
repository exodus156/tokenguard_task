export type ButtonProps = {
	onClick: () => void
	textContent: string
	isActive?: boolean
}

export const Button: React.FC<ButtonProps> = ({
	onClick,
	textContent,
	isActive = false,
}) => {
	return (
		<button
			type="button"
			data-testId="button"
			onClick={onClick}
			className={`
			text-white
			focus:outline-none
			font-medium 
			rounded-lg 
			text-sm 
			px-4 
			py-2
			text-center 
			me-2 
			mb-2
			${
				isActive
					? 'bg-gradient-to-br from-purple-400 to-blue-300 ring-black ring-2 text-black'
					: 'bg-gradient-to-br from-purple-600 to-blue-500'
			}`}
		>
			{textContent}
		</button>
	)
}
