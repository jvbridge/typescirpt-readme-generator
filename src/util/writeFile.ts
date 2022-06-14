import * as fs from 'node:fs/promises'
import * as path from 'node:path'
import { constants } from 'node:fs';

const OUTPUT_PATH = path.join(__dirname, "../output/")

/**
 * Writes a file out to the appropriate directory
 * @param input the string to write to the file
 */
async function writeFile(input: string, fileName: string){
  // get the path to write
  const output = OUTPUT_PATH + fileName;

  // try to write the file
  try{
    await fs.writeFile(output, input)
  } catch (err){
    console.info("output directory doesn't exist, creating it...")
    // we couldn't write to the file
    await fs.mkdir(OUTPUT_PATH);
    await writeFile(input, fileName);
  }
}

export default writeFile