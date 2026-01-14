export interface CheckboxProps
	extends Omit<React.ComponentProps<'input'>, 'type'> {}

export function Checkbox(props: CheckboxProps): React.ReactNode {
	return <input type="checkbox" data-slot="checkbox" {...props} />
}
