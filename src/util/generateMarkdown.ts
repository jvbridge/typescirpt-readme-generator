import { Config } from './inquire';

function generateMarkdown(config: Config): string {
  const {title, description, installation, usage, contributing, tests} = config;
  
  const ret = (
`#Title
${title}

##Description
${description}

##Installation
${installation}

##Usage
${usage}

##Contributing
${contributing}

##Tests
${tests}`
  )
return ret;
}

export default generateMarkdown;
