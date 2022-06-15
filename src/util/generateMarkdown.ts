import { Config } from './inquire';
import licenses from './license.json';

// creating a type for accessing the object
type licenseKey = keyof typeof licenses;

/**
 * This generates a string that can be used to make a markdown file. 
 * @param config the strings needed to make a readme
 * @returns should be written to a file
 */
function generateMarkdown(config: Config): string {
  const { title, description, installation, usage, contributing, tests } =
    config;

  // pull out the choice made and set it as the appropriate chocie
  const license = licenses[config.license as licenseKey];

  // return a string literal that puts all of the appropraite parts in
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
