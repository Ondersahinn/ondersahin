import { RootState } from "@redux/reducers";
import { adminCheckAuth } from "@utils/session";
import { Table } from "antd";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { http } from "src/api/http";


const Blog: React.FC = () => {
    const colums = [
        {
            title: 'Title',
            dataIndex: 'Title',
            key: 'Title',
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

    const [isList, setIsList] = useState<boolean>(true);
    const status = useSelector((state: RootState) => state.categories.status);
    const categories = useSelector((state: RootState) => state.categories.categories);
    const dispatch = useDispatch();


    const handleDelete = async (record: any) => {
        // await http.delete('/api/categories?id=' + record.key).then((res)=> {
        //     dispatch(changeCategoriesStatus('idle'))
        // })
    }

    useEffect(() => {
        if (status === 'idle') {
            // dispatch(fetchCategories())
        }
    }, [dispatch, status])

    return (
        <>
            <div>
                <div className="flex justify-end">
                    <button type="button" onClick={() => setIsList(!isList)}
                        className="py-2.5 float-right px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">{isList ? 'Kategori Ekle' : 'Listeye Dön'}</button>
                </div>
                
                    <Table dataSource={categories.map((x: any) => { return { ...x, key: x._id } })} columns={colums} />
                   
            </div>
        </>
    )
}
Blog.displayName = "PanelPage"

export default Blog
export const getServerSideProps = adminCheckAuth({});