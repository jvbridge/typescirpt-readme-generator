import writeFile, { OUTPUT_PATH } from './util/writeFile';
import configuration from './util/inquire';
import generateMarkdown from './util/generateMarkdown';
import { Config } from './util/inquire';

/**
 * The initializataion funciton for our generator
 */
async function init() {
  // get the configuration from the user
  const config: Config = await configuration();
  console.log('got configuration, now pulling from generate readme');

  // generate the file into a single string
  const fileString = generateMarkdown(config);

  // write it
  await writeFile(fileString, config.filename);
  console.log('Completed writing config to: ' + OUTPUT_PATH + config.filename);
}
// run it
init();
