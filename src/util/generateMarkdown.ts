import { Config } from './inquire';
import licenses from './license.json';

// creating a type for accessing the object
export type licenseKey = keyof typeof licenses;

function generateMarkdown(config: Config): string {
  const { title, description, installation, usage, contributing, tests } =
    config;

  // pull out the choice made and set it as the appropriate chocie
  const license = licenses[config.license as licenseKey];

  const ret = `# Title

${title}

## Description

${description}

## Installation

${installation}

## Usage

${usage}

## Contributing

${contributing}

## Tests

${tests}

## License
${license}
`;
  return ret;
}

export default generateMarkdown;
