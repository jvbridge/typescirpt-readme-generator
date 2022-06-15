import * as iq from 'inquirer';
import licenses from './license.json';

// creating the array of choices to choose from from the license array
const choices = Object.keys(licenses);

export type Config = {
  filename: string;
  title: string;
  description: string;
  installation: string;
  usage: string;
  contributing: string;
  tests: string;
  license: string;
};

const configQuestions = [
  {
    type: 'input',
    name: 'filename',
    message: 'What would you like to name this file?'
  },
  {
    type: 'input',
    name: 'title',
    message: 'What would you like to name this readme?'
  },
  {
    type: 'input',
    name: 'description',
    message: 'How would you describe the program?'
  },
  {
    type: 'input',
    name: 'installation',
    message: 'How is it installed?'
  },
  {
    type: 'input',
    name: 'usage',
    message: 'What do you do to use this?'
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'Who else contributed?'
  },
  {
    type: 'input',
    name: 'tests',
    message: 'What did you use to test this readme'
  },
  {
    type: 'list',
    name: 'license',
    message: 'Which license would you like to use for the readme',
    choices
  }
];

const defaultConfig: Config = {
  filename: 'default.md',
  title: 'Default title',
  description: 'This is a description a readme can have',
  installation: 'You can install this by completing some default steps',
  usage: 'Here is a desciption of using it',
  contributing: 'you can name any contributers in this section',
  tests: 'What sort of testing suites did you use?',
  license: 'MIT'
};

export default async function configuration(): Promise<Config> {
  const { useDefault } = await iq.prompt({
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
