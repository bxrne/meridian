export type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6

export interface HeadingProps extends React.ComponentProps<'h1'> {
	/** Semantic heading level (1-6) */
	level?: HeadingLevel
}

export function Heading({
	level = 2,
	...props
}: HeadingProps): React.ReactNode {
	const Tag = `h${level}` as const

	return <Tag data-slot="heading" data-level={level} {...props} />
}
