import * as fs from 'fs';

export default async function handler(req, res) {
    const data = await fs.promises.readdir('contacts')
    if (req.method === 'POST') {
        console.log(req);
        fs.writeFile(`contacts/${data.length + 1}.json`, JSON.stringify(req.body), err => {
            if (err) {
                console.error(err);
            }
            // file written successfully
            res.status(200).json({ message: "success" })
        });
    } else {
        // Handle any other HTTP method
    }
}