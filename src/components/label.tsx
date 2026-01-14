export interface LabelProps extends React.ComponentProps<'label'> {
	/** Whether the associated field is required */
	required?: boolean
}

export function Label({ required, ...props }: LabelProps): React.ReactNode {
	return (
		// biome-ignore lint/a11y/noLabelWithoutControl: Consumer provides htmlFor
		<label data-slot="label" data-required={required || undefined} {...props} />
	)
}
