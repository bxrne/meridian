import './styles.css'
import '../../src/styles.css'

import { Badge } from '../../src/components/badge'
import { Button } from '../../src/components/button'
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '../../src/components/card'
import { Checkbox } from '../../src/components/checkbox'
import { Heading } from '../../src/components/heading'
import { Input } from '../../src/components/input'
import { Label } from '../../src/components/label'
import { Separator } from '../../src/components/separator'
import { Switch } from '../../src/components/switch'
import { Text } from '../../src/components/text'

function Section({
	title,
	children,
}: {
	title: string
	children: React.ReactNode
}) {
	return (
		<section className="section">
			<Heading level={3}>{title}</Heading>
			<div className="section-content">{children}</div>
		</section>
	)
}

export function App() {
	return (
		<main>
			<div className="container">
				<header className="header">
					<Heading level={1}>Meridian</Heading>
					<Text muted>Industrial component library</Text>
				</header>

				<Separator />

				<Section title="Button">
					<div className="row">
						<Button intent="primary">Primary</Button>
						<Button intent="secondary">Secondary</Button>
						<Button intent="danger">Danger</Button>
						<Button intent="ghost">Ghost</Button>
						<Button disabled>Disabled</Button>
					</div>
				</Section>

				<Section title="Input">
					<div className="stack">
						<div className="field">
							<Label htmlFor="input-default">Serial number</Label>
							<Input id="input-default" placeholder="Enter value" />
						</div>
						<div className="field">
							<Label htmlFor="input-invalid" required>
								Required field
							</Label>
							<Input id="input-invalid" invalid placeholder="Invalid input" />
						</div>
						<div className="field">
							<Label htmlFor="input-disabled">Disabled</Label>
							<Input id="input-disabled" disabled placeholder="Disabled" />
						</div>
					</div>
				</Section>

				<Section title="Badge">
					<div className="row">
						<Badge>Default</Badge>
						<Badge variant="success">Operational</Badge>
						<Badge variant="warning">Caution</Badge>
						<Badge variant="danger">Stop</Badge>
						<Badge variant="info">Info</Badge>
					</div>
				</Section>

				<Section title="Card">
					<Card style={{ maxWidth: '320px' }}>
						<CardHeader>
							<CardTitle>System status</CardTitle>
							<CardDescription>Current operational parameters</CardDescription>
						</CardHeader>
						<CardContent>
							<Text size="sm">All systems nominal. No anomalies detected.</Text>
						</CardContent>
						<CardFooter>
							<Button intent="secondary">View details</Button>
							<Button intent="ghost">Dismiss</Button>
						</CardFooter>
					</Card>
				</Section>

				<Section title="Typography">
					<div className="stack">
						<Heading level={1}>Heading 1</Heading>
						<Heading level={2}>Heading 2</Heading>
						<Heading level={3}>Heading 3</Heading>
						<Heading level={4}>Heading 4</Heading>
						<Heading level={5}>Heading 5</Heading>
						<Heading level={6}>Heading 6</Heading>
						<Separator />
						<Text size="lg">Text large</Text>
						<Text>Text base</Text>
						<Text size="sm">Text small</Text>
						<Text size="xs">Text extra small</Text>
						<Text muted>Text muted</Text>
					</div>
				</Section>

				<Section title="Controls">
					<div className="stack">
						<div className="row-inline">
							<Switch id="switch-1" defaultChecked />
							<Label htmlFor="switch-1">Enable notifications</Label>
						</div>
						<div className="row-inline">
							<Switch id="switch-2" />
							<Label htmlFor="switch-2">Auto-sync</Label>
						</div>
						<div className="row-inline">
							<Switch id="switch-3" disabled />
							<Label htmlFor="switch-3">Disabled switch</Label>
						</div>
						<Separator />
						<div className="row-inline">
							<Checkbox id="check-1" defaultChecked />
							<Label htmlFor="check-1">Accept terms</Label>
						</div>
						<div className="row-inline">
							<Checkbox id="check-2" />
							<Label htmlFor="check-2">Subscribe to updates</Label>
						</div>
						<div className="row-inline">
							<Checkbox id="check-3" disabled />
							<Label htmlFor="check-3">Disabled checkbox</Label>
						</div>
					</div>
				</Section>
			</div>
		</main>
	)
}

export default App
