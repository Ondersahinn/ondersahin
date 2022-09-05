import { NextApiRequest, NextApiResponse } from 'next';
import connectDB from '../../../db/mongodb';
import Resources from '@models/resources';
import { Iresources } from 'interfaces/categories';
import jwt from 'jsonwebtoken';


const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === 'GET') {
        const { lang } = req.query;
        const resources: Iresources[] | null = await Resources.find({ lang: lang });
        return res.status(200).json({
            message: "allResources",
            status: 200,
            data: resources,
            color: 'succes',
        });
    }
    const token = req.headers.authorization;
    if (!!token) {
        const key = token.split(' ')[1]
        try {
            jwt.verify(key, process.env.JWT_SCREET_KEY as string)
        } catch (error) {
            return res.status(401).json({
                message: "unAuthorization",
                status: 401,
                data: {},
                color: 'error',
            });
        }
    }
    else {
        return res.status(401).json({
            message: "unAuthorization",
            status: 401,
            data: {},
            color: 'error',
        });
    }

    if (req.method === 'POST') {
        const { key, value, lang }: Iresources = req.body;
        if (!!key && !!value && !!lang) {
            try {
                const resource = new Resources<Iresources>({
                    key,
                    value,
                    lang
                });
                let resourceCreated = await resource.save();

                return res.status(200).json({
                    message: "resorceCreated",
                    status: 200,
                    data: resourceCreated,
                    color: 'success',
                });
            } catch (error) {
                return res.status(500).json({
                    message: "serviceError",
                    status: 500,
                    data: {},
                    color: 'error',
                });
            }
        }

        else {
            return res.status(401).json({
                message: "unAuthorization",
                status: 401,
                data: {},
                color: 'error',
            });
        }

    }
    else if (req.method === 'DELETE') {
        const { id } = req.query;
        let resources: any = await Resources.deleteOne({ _id: id });
        return res.status(202).json({
            message: "deleteresources",
            status: 202,
            data: resources,
            color: 'succes',
        });
    }
    else {
        return res.status(401).json({
            message: "unAuthorization",
            status: 401,
            data: {},
            color: 'error',
        });
    }
};

export default connectDB(handler);