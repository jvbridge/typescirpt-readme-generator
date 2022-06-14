type Config ={
  title: string;
  description:string;
  installation: string;
  usage: string;
  contributing: string;
  tests: string;
}


function generateMarkdown(config: Config): string{
  return 'default readme'
}

export default generateMarkdown