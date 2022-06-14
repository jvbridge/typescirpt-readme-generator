import writeFile from "./util/writeFile";

const OUTPUT_PATH = "test.txt"

const questions = []

/**
 * The initializataion funciton for our generator
 */
async function init(){
  await writeFile("this is a test file", OUTPUT_PATH);
}

init();