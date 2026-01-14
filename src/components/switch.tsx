export interface SwitchProps
	extends Omit<React.ComponentProps<'input'>, 'type'> {}

export function Switch({
	checked,
	defaultChecked,
	...props
}: SwitchProps): React.ReactNode {
	return (
		<input
			type="checkbox"
			data-slot="switch"
			role="switch"
			aria-checked={checked ?? defaultChecked ?? false}
			checked={checked}
			defaultChecked={defaultChecked}
			{...props}
		/>
	)
}
