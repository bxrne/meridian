export type ButtonIntent = 'primary' | 'secondary' | 'danger' | 'ghost'

export interface ButtonProps extends React.ComponentProps<'button'> {
	/** Visual style intent of the button */
	intent?: ButtonIntent
}

export function Button({
	intent = 'primary',
	...props
}: ButtonProps): React.ReactNode {
	return (
		<button type="button" data-slot="button" data-intent={intent} {...props} />
	)
}
