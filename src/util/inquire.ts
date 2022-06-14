import * as iq from 'inquirer';

export type Config = {
  filename: string;
  title: string;
  description: string;
  installation: string;
  usage: string;
  contributing: string;
  tests: string;
};


const configQuestions = [
  {
    type: 'input',
    name: 'filename',
    message: 'what would you like to name this file?'
  },
  {
    type: 'input',
    name: 'title',
    message: 'What would you like to name this readme?'
  }
];

const defaultConfig:Config = {
  filename: "default.md",
  title: 'string',
  description: 'string',
  installation: 'string',
  usage: 'string',
  contributing: 'string',
  tests: 'string',
};

export default async function configuration(): Promise<Config> {
  const {useDefault} = await iq.prompt({
    type: 'confirm',
    name: 'useDefault',
    message: 'Would you like to use the default generated document?'
  });
  if (useDefault) {
    console.log('generated default readme');
    return defaultConfig;
  }

  const configuration: Config = await iq.prompt(configQuestions);
  return configuration;
}
