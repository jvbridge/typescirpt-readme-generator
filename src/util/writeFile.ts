import * as fs from 'fs/promises';
import * as path from 'path';

const OUTPUT_PATH = '../output/';
/**
 * Writes a file out to the appropriate directory
 * @param str the string to write to the file
 */
async function writeFile(str: string, fileName: string) {
  const output = OUTPUT_PATH + fileName;

  await fs.writeFile(path.join(__dirname, output), str);
  console.log('successfully wrote to: ', fileName);
}

export default writeFile;
