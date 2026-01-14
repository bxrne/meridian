export interface InputProps extends React.ComponentProps<'input'> {
	/** Whether the input value is invalid */
	invalid?: boolean
}

export function Input({ invalid, ...props }: InputProps): React.ReactNode {
	return (
		<input data-slot="input" aria-invalid={invalid || undefined} {...props} />
	)
}
