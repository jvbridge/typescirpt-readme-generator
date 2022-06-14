import * as iq from 'inquirer';

const starterQuestions = [
  {
    type: 'confirm',
    name: 'useDefault',
    message: 'Would you like to use the default generated document?'
  }
];

export default async function initialize () {
  const answer = await iq.prompt(starterQuestions)
  console.log("User chose to use default: ", answer);
}