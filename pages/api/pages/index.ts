import { NextApiRequest, NextApiResponse } from 'next';
import connectDB from '../../../db/mongodb';
import Pages from '@models/pages';
import jwt from 'jsonwebtoken';
import { IPages } from 'interfaces/pages';



const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === 'GET') {
        let resources: IPages[] | null = []
        const { lang } = req.query;
        if (lang === 'all') {
            resources = await Pages.find({});
        }
        else {
            resources = await Pages.find({ lang: lang });
        }

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
        try {
            const resource = new Pages<IPages>(
                { ...req.body }
            );
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
                data: { error },
                color: 'error',
            });
        }



    }
    else if (req.method === 'DELETE') {
        const { id } = req.query;
        let resources: any = await Pages.deleteOne({ _id: id });
        return res.status(202).json({
            message: "deleteresources",
            status: 202,
            data: resources,
            color: 'succes',
        });
    }
    else if (req.method === 'PATCH') {
        try {
            const { id } = req.query
            const update = await Pages.findOneAndUpdate({ _id: id }, { ...req.body }, { new: true }).exec()

            return res.status(200).json({
                message: "resorceCreated",
                status: 200,
                data: update,
                color: 'success',
            });
        } catch (error) {
            return res.status(500).json({
                message: "serviceError",
                status: 500,
                data: { error },
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
};

export default connectDB(handler);