import { Config } from './inquire';

function generateMarkdown(config: Config): string {
  const {title, description, installation, usage, contributing, tests} = config;
  
  const ret = (
`#${title}

##${description}

##${installation}

##${usage}

##${contributing}

##${tests}`
  )
return ret;
}

export default generateMarkdown;
