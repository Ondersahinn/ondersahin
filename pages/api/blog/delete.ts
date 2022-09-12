import { NextApiRequest, NextApiResponse } from 'next';
import connectDB from '../../../db/mongodb';
import Blog from '@models/blogs';
import jwt from 'jsonwebtoken'
import { IJwt } from 'interfaces/user';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    const token = req.headers.authorization;
    let user: null | IJwt = null
    if (!!token) {
        const key = token.split(' ')[1]
        try {
            user = jwt.verify(key, process.env.JWT_SCREET_KEY as string) as IJwt
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
    if (req.method === 'DELETE') {
        const { id } = req.query;
        let categories: any = await Blog.deleteOne({ _id: id });
        return res.status(202).json({
            message: "deleteCategories",
            status: 202 ,
            data: categories,
            color: 'succes',
        });
    } else {
        return res.status(422).send({
            message: 'fail',
            status: 422,
            color: 'danger',
            data: null
        });
    }
};

export default connectDB(handler);