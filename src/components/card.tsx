export interface CardProps extends React.ComponentProps<'div'> {}

export function Card(props: CardProps): React.ReactNode {
	return <div data-slot="card" {...props} />
}

export interface CardHeaderProps extends React.ComponentProps<'div'> {}

export function CardHeader(props: CardHeaderProps): React.ReactNode {
	return <div data-slot="card-header" {...props} />
}

export interface CardTitleProps extends React.ComponentProps<'h3'> {}

export function CardTitle(props: CardTitleProps): React.ReactNode {
	return <h3 data-slot="card-title" {...props} />
}

export interface CardDescriptionProps extends React.ComponentProps<'p'> {}

export function CardDescription(props: CardDescriptionProps): React.ReactNode {
	return <p data-slot="card-description" {...props} />
}

export interface CardContentProps extends React.ComponentProps<'div'> {}

export function CardContent(props: CardContentProps): React.ReactNode {
	return <div data-slot="card-content" {...props} />
}

export interface CardFooterProps extends React.ComponentProps<'div'> {}

export function CardFooter(props: CardFooterProps): React.ReactNode {
	return <div data-slot="card-footer" {...props} />
}
