import * as fs from 'node:fs/promises'
import * as path from 'node:path'

const OUTPUT_PATH = "../output/"

/**
 * checks if a path exists
 * @param checkPath the path we wish to check if it exists
 * @returns 
 */
async function pathExists (checkPath: string): Promise<boolean>{
  try {
    await fs.access(checkPath); 
    return true;
  } catch{
    return false;
  }
}

/**
 * Writes a file out to the appropriate directory
 * @param str the string to write to the file
 */
async function writeFile(str: string, fileName: string){
  
  if (!pathExists(OUTPUT_PATH)){
    await fs.mkdir(OUTPUT_PATH);
  }
  
  const output = OUTPUT_PATH + fileName;

  await fs.writeFile(path.join(__dirname, output), str)
  console.log("successfully wrote to: ", fileName);
}

export default writeFile