import writeFile from './util/writeFile';
import initialize from './util/inquire';

const OUTPUT_FILE = 'test.txt';

const questions = [];

/**
 * The initializataion funciton for our generator
 */
async function init() {
  await initialize();
}

init();
