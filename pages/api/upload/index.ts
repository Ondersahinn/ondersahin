import { NextApiRequest, NextApiResponse } from "next";
import formidable from "formidable";
import fs from "fs";
import { middlewareAdmin } from "@utils/adminmiddleware";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        const { folderName } = req.query;
        const promise = new Promise((resolve, reject) => {
            const form = new formidable.IncomingForm();
            form.parse(req, (err, fields, files) => {
                if (err) reject(err);
                resolve({ fields, files });
            })
        })
        promise.then(async ({ fields, files }: any) => {
            try {
                const dir = `./public/${folderName}`
                if (!fs.existsSync(dir)) {
                    fs.mkdirSync(dir);
                }
                const data = fs.readFileSync(files.image.filepath);
                fs.writeFileSync(`./public/${folderName}/${files.image.newFilename + '.' + files.image.mimetype?.split('/')[1]}`, data);
                await fs.unlinkSync(files.image.filepath);
                return res.status(200).json({
                    message: "uploaded",
                    status: 200,
                    data: { url: `/${folderName}/${files.image.newFilename}`, orginalName: files.image.originalFilename },
                    color: 'success',
                });
            } catch (error) {
                return res.status(500).json({
                    message: "serviceError",
                    status: 500,
                    data: error,
                    color: 'error',
                });
            }

        })
    } catch (error) {
        return res.status(500).json({
            message: "serviceError",
            status: 500,
            data: error,
            color: 'error',
        });
    }

}
export const config = {
    api: {
        bodyParser: false
    }
};

export default middlewareAdmin(handler)