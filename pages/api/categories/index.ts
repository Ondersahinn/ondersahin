import { NextApiRequest, NextApiResponse } from 'next';
import connectDB from '../../../db/mongodb';
import Categories from '@models/categories';
import { Icategories } from 'interfaces/categories';
import jwt from 'jsonwebtoken';


const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === 'GET') {
        let categories: Icategories[] | null = await Categories.find({});

        return res.status(200).json({
            message: "allCategories",
            status: 200,
            data: categories,
            color: 'succes',
        });
    }
    const token = req.headers.authorization;
    if (!!token) {
        const key = token.split(' ')[1]
        try {
            jwt.verify(key, process.env.JWT_SCREET_KEY as string)
        } catch (error) {
            req.session.destroy()
            return res.status(401).json({
                message: "unAuthorization",
                status: 401,
                data: {},
                color: 'error',
            });
        }
    }
    else {
        req.session.destroy()
        return res.status(401).json({
            message: "unAuthorization",
            status: 401,
            data: {},
            color: 'error',
        });
    }

    if (req.method === 'POST' && !!token) {
        const { name, path }: Icategories = req.body;
        if (!!name && !!path) {
            try {
                var category = new Categories<Icategories>({
                    name,
                    path
                });
                let usercreated = await category.save();

                return res.status(200).json({
                    message: "categoryCreated",
                    status: 200,
                    data: usercreated,
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
            req.session.destroy()
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
        let categories: any = await Categories.deleteOne({ _id: id });
        return res.status(202).json({
            message: "deleteCategories",
            status: 202 ,
            data: categories,
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