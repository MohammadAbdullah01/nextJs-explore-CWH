// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import * as fs from 'fs';

export default async function handler(req, res) {
  let data = await fs.promises.readdir('blogdata')
  console.log(req.query);
  const start = parseInt(req.query.start)
  const limit = parseInt(req.query.limit)
  data = data.slice(start, start + limit)
  let file;
  const files = []
  for (let index = 0; index < data.length; index++) {
    const element = data[index];
    file = await fs.promises.readFile(`blogdata/${element}`, 'utf-8')
    files.push(JSON.parse(file))
  }
  res.status(200).json(files)
}
