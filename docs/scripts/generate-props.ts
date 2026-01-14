/**
 * Prop Generation Script
 *
 * Parses TypeScript component files and extracts prop information
 * using react-docgen-typescript. Outputs JSON files for each component.
 */

import { existsSync, mkdirSync, readdirSync, writeFileSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { parse, type PropItem } from 'react-docgen-typescript';

const __dirname = dirname(fileURLToPath(import.meta.url));
const COMPONENTS_DIR = resolve(__dirname, '../../src/components');
const OUTPUT_DIR = resolve(__dirname, '../props');

interface PropDefinition {
	name: string;
	type: string;
	required: boolean;
	defaultValue: string | null;
	description: string;
}

interface ComponentDoc {
	name: string;
	description: string;
	props: PropDefinition[];
}

// Custom props we want to document (defined in our component interfaces)
const CUSTOM_PROPS: Record<string, Set<string>> = {
	badge: new Set(['variant']),
	button: new Set(['intent']),
	card: new Set([]),
	checkbox: new Set([]),
	heading: new Set(['level']),
	input: new Set(['invalid']),
	label: new Set(['required']),
	separator: new Set(['orientation']),
	switch: new Set([]),
	text: new Set(['size', 'muted', 'inline']),
};

function formatType(type: PropItem['type']): string {
	if (!type) return 'unknown';

	// Handle union types
	if (type.name === 'enum' && type.value) {
		const values = type.value as Array<{ value: string }>;
		return values.map((v) => v.value).join(' | ');
	}

	// Clean up complex types
	let typeName = type.name;

	// Simplify React types
	typeName = typeName.replace(/React\./g, '');
	typeName = typeName.replace(/ReactNode/g, 'ReactNode');

	return typeName;
}

function extractDefaultValue(
	prop: PropItem,
): string | null {
	if (prop.defaultValue?.value !== undefined) {
		return String(prop.defaultValue.value);
	}
	return null;
}

function parseComponent(filePath: string, componentName: string): ComponentDoc | null {
	const customProps = CUSTOM_PROPS[componentName] || new Set();
	
	const options = {
		savePropValueAsString: true,
		shouldExtractLiteralValuesFromEnum: true,
		shouldRemoveUndefinedFromOptional: true,
		propFilter: (prop: PropItem) => {
			// Only keep props that are explicitly defined in our component
			return customProps.has(prop.name);
		},
	};

	try {
		const docs = parse(filePath, options);

		if (docs.length === 0) {
			console.log(`  No documentation found for ${filePath}`);
			return null;
		}

		// Get the main component (usually the first one, or the one matching the file name)
		const mainDoc = docs[0];

		const props: PropDefinition[] = Object.entries(mainDoc.props)
			.map(([name, prop]) => ({
				name,
				type: formatType(prop.type),
				required: prop.required,
				defaultValue: extractDefaultValue(prop),
				description: prop.description || '',
			}))
			.sort((a, b) => {
				// Sort: required first, then alphabetically
				if (a.required !== b.required) {
					return a.required ? -1 : 1;
				}
				return a.name.localeCompare(b.name);
			});

		return {
			name: mainDoc.displayName,
			description: mainDoc.description || '',
			props,
		};
	} catch (error) {
		console.error(`  Error parsing ${filePath}:`, error);
		return null;
	}
}

function main() {
	console.log('Generating prop documentation...\n');

	// Ensure output directory exists
	if (!existsSync(OUTPUT_DIR)) {
		mkdirSync(OUTPUT_DIR, { recursive: true });
	}

	// Get all component files
	const files = readdirSync(COMPONENTS_DIR).filter((f) => f.endsWith('.tsx'));

	const results: { name: string; success: boolean }[] = [];

	for (const file of files) {
		const filePath = join(COMPONENTS_DIR, file);
		const componentName = file.replace('.tsx', '');

		console.log(`Processing: ${componentName}`);

		const doc = parseComponent(filePath, componentName);

		if (doc) {
			const outputPath = join(OUTPUT_DIR, `${componentName}.json`);
			writeFileSync(outputPath, JSON.stringify(doc, null, '\t'));
			console.log(`  ✓ Generated ${componentName}.json (${doc.props.length} props)`);
			results.push({ name: componentName, success: true });
		} else {
			results.push({ name: componentName, success: false });
		}
	}

	console.log('\n--- Summary ---');
	const successful = results.filter((r) => r.success);
	const failed = results.filter((r) => !r.success);

	console.log(`Generated: ${successful.length}/${results.length} components`);

	if (failed.length > 0) {
		console.log(`Failed: ${failed.map((r) => r.name).join(', ')}`);
	}
}

main();

