import * as fs from 'fs/promises'
import * as path from 'path'

/**
 * Writes a file out to the appropriate directory
 * @param str the string to write to the file
 */
async function writeFile(str: string, fileName: string){
  await fs.writeFile(path.join(__dirname, fileName), str)
  console.log("successfully wrote to: ", fileName);
}

export default writeFile