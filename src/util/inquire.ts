import * as iq from 'inquirer';

export type Config = {
  title: string;
  description: string;
  installation: string;
  usage: string;
  contributing: string;
  tests: string;
};


const starterQuestions = [
  {
    type: 'input',
    name: 'title',
    message: 'What would you like to name this readme?'
  }
];

const defaultConfig = {
  title: 'string',
  description: 'string',
  installation: 'string',
  usage: 'string',
  contributing: 'string',
  tests: 'string'
};

export default async function configuration(): Promise<Config> {
  const answer = await iq.prompt({
    type: 'confirm',
    name: 'useDefault',
    message: 'Would you like to use the default generated document?'
  });
  if (answer.useDefault) {
    console.log('generated default readme');
    return defaultConfig;
  }

  const configuration: Config = await iq.prompt(starterQuestions);
  return configuration;
}
