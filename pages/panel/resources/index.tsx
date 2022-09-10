import AddResources from '@components/forms/addBlog';
import { adminCheckAuth } from '@utils/session';
import { RootState } from "@redux/reducers";
import { Table } from "antd";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { http } from "src/api/http";
import { fetchResources } from '@redux/slices/translation';
import { useRouter } from 'next/router';

export const Resources: React.FC = () => {
    const colums = [
        {
            title: 'Key',
            dataIndex: 'key',
            key: 'key',
        },
        {
            title: 'Dil',
            dataIndex: 'lang',
            key: 'lang',
        },
        {
            title: 'Value',
            dataIndex: 'value',
            key: 'value',
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
    const status = useSelector((state: RootState) => state.translation.status);
    const resources = useSelector((state: RootState) => state.translation.resources);
    const dispatch = useDispatch();
    const router = useRouter();


    const handleDelete = async (record: any) => {
        await http.delete('/api/resources?id=' + record._id).then((res) => {
            dispatch(fetchResources('all'))
        })
    }

    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchResources(router.locale))
        }
    }, [dispatch, status, router])

    return (
        <>
            <div>
                <div className="flex justify-end">
                    <button type="button" onClick={() => setIsList(!isList)}
                        className="py-2.5 float-right px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">{isList ? 'Yeni Dil Kaynağı Ekle' : 'Listeye Dön'}</button>
                </div>
                {isList ?
                    <Table dataSource={resources.map((x: any) => { return { ...x } })} columns={colums} />
                    : <AddResources />}
            </div>
        </>
    )
}


export default Resources;
Resources.displayName = "PanelPage";

export const getServerSideProps = adminCheckAuth({});