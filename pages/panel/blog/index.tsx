import { RootState } from "@redux/reducers";
import { fetchBlogs } from "@redux/slices/blog";
import { adminCheckAuth } from "@utils/session";
import { Table } from "antd";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { http } from "src/api/http";


const Blog: React.FC = () => {
    const colums = [
        {
            title: 'Title',
            dataIndex: 'title',
            key: 'title',
        },
        {
            title: 'Short Desc',
            dataIndex: 'shortDesc',
            key: 'shortDesc',
        },
        {
            title: 'owner',
            dataIndex: 'owner',
            key: 'owner',
        },
        {
            title: 'Create date time',
            dataIndex: 'since',
            key: 'since',
        },
        {
            title: 'Action',
            dataIndex: '',
            key: 'x',
            render: (text: any, record: any, index: number) => <a onClick={() => handleDelete(record)}>Delete</a>,
        }
    ];

    const status = useSelector((state: RootState) => state.categories.status);
    const blogs = useSelector((state: RootState) => state.blogs.blogs);
    const dispatch = useDispatch();


    const handleDelete = async (record: any) => {
        await http.delete('/api/blog/delete?id=' + record.key).then((res)=> {
            dispatch(fetchBlogs())
        })
    }

    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchBlogs())
        }
    }, [dispatch, status])

    return (
        <>
            <div>
                <Table dataSource={blogs.map((x: any) => { return { ...x, key: x._id, owner: x.owner?.email } })} columns={colums} />
            </div>
        </>
    )
}
Blog.displayName = "PanelPage"

export default Blog
export const getServerSideProps = adminCheckAuth({});