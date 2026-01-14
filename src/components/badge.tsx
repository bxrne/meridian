export type BadgeVariant = 'default' | 'success' | 'warning' | 'danger' | 'info'

export interface BadgeProps extends React.ComponentProps<'span'> {
	/** Visual variant indicating status or category */
	variant?: BadgeVariant
}

export function Badge({
	variant = 'default',
	...props
}: BadgeProps): React.ReactNode {
	return (
		<span
			data-slot="badge"
			data-variant={variant === 'default' ? undefined : variant}
			{...props}
		/>
	)
}
