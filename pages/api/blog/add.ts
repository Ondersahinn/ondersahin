import { NextApiRequest, NextApiResponse } from 'next';
import connectDB from '../../../db/mongodb';
import Blog from '@models/blogs';
import { IBlog } from 'interfaces/blogs';
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
        req.session.destroy();
        return res.status(401).json({
            message: "unAuthorization",
            status: 401,
            data: {},
            color: 'error',
        });
    }
    if (req.method === 'POST' && !!token) {
        const { title, shortDesc, description, tags }: IBlog = req.body;
        if (!!title && !!shortDesc && !!description) {
            try {
                let blog = new Blog({
                    title,
                    shortDesc,
                    description,
                    tags: tags,
                    owner: user.id,
                });
                let blogCreated: any = await blog.save();
                return res.status(201).json({
                    message: "BlogCreated",
                    status: 200,
                    data: blogCreated,
                    color: 'succes',
                });
            } catch (error) {
                return res.status(500).send({
                    message: 'fail',
                    status: 500,
                    color: 'danger',
                    data: error
                });
            }
        } else {
            return res.status(422).send({
                message: 'fail',
                status: 422,
                color: 'danger',
                data: null
            });
        }
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