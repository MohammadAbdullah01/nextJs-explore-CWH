// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import * as fs from 'fs';

export default async function handler(req, res) {
    let data = await fs.promises.readdir('blogdata')
    res.status(200).json(data.length)
}
