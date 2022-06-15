import * as fs from 'node:fs/promises';
import * as path from 'node:path';

export const OUTPUT_PATH = path.join(__dirname, '../output/');

/**
 * Writes a file out to the appropriate directory
 * @param input the string to write to the file
 */
async function writeFile(input: string, fileName: string) {
  // parse the filename given
  let outputFileName: string;

  const extensions = fileName.split('.');
  extensions.length > 1
    ? (outputFileName = extensions[0] + '.md')
    : (outputFileName = fileName + '.md');
  // get the path to write
  const output = OUTPUT_PATH + outputFileName;

  // try to write the file
  try {
    await fs.writeFile(output, input);
  } catch (err) {
    console.info("output directory doesn't exist, creating it...");
    // we couldn't write to the file
    await fs.mkdir(OUTPUT_PATH);
    await writeFile(input, fileName);
  }
}

export default writeFile;
