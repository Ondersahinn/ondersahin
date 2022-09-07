import { NextApiRequest, NextApiResponse } from 'next';
import connectDB from '../../../db/mongodb';
import Blog from '@models/blogs';
import { IBlog } from 'interfaces/blogs';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {

    if (req.method === 'GET') {
        try {
            let blogLists: IBlog[] | null = await Blog.find({}).populate({path:'owner',select:'username email'})
            return res.status(200).json({
                message: "BlogCreated",
                status: 200,
                data: blogLists,
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

};

export default connectDB(handler);