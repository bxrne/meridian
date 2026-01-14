export type TextSize = 'xs' | 'sm' | 'base' | 'lg'

export interface TextProps extends React.ComponentProps<'p'> {
	/** Font size variant */
	size?: TextSize
	/** Whether to use muted color */
	muted?: boolean
	/** Render as span instead of paragraph */
	inline?: boolean
}

export function Text({
	size = 'base',
	muted,
	inline,
	...props
}: TextProps): React.ReactNode {
	const Tag = inline ? 'span' : 'p'

	return (
		<Tag
			data-slot="text"
			data-size={size === 'base' ? undefined : size}
			data-muted={muted || undefined}
			{...props}
		/>
	)
}
