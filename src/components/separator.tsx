export type SeparatorOrientation = 'horizontal' | 'vertical'

export interface SeparatorProps extends React.ComponentProps<'hr'> {
	/** Direction of the separator line */
	orientation?: SeparatorOrientation
}

export function Separator({
	orientation = 'horizontal',
	...props
}: SeparatorProps): React.ReactNode {
	return (
		<hr
			data-slot="separator"
			data-orientation={orientation}
			aria-orientation={orientation}
			{...props}
		/>
	)
}
