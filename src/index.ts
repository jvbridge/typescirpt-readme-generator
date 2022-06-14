import writeFile from './util/writeFile';
import configuration from './util/inquire';
import generateMarkdown from './util/generateMarkdown';
import { Config } from './util/inquire';

const OUTPUT_FILE = 'test.txt';

const questions = [];

/**
 * The initializataion funciton for our generator
 */
async function init() {
  const config:Config = await configuration();
  console.log('got configuration, now pulling from generate readme');
  const fileString = generateMarkdown(config);
  await writeFile(fileString, OUTPUT_FILE);
}

init();
