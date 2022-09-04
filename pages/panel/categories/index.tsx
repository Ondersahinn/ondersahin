import AddCategories from "@components/forms/addCategory";
import { adminCheckAuth } from "@utils/session";
import { Table } from "antd";
import {  useState } from "react";


const Categories: React.FC = () => {
    const [isList, setIsList] = useState<boolean>(true);

    const dataSource = [
        {
            key: '1',
            name: 'Mike',
            path: '/',
            since: '10 Downing Street',
        },
        {
            key: '2',
            name: 'John',
            path: 42,
            since: '10 Downing Street',
        },
    ];

    const columns = [
        {
            title: 'Category Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Path',
            dataIndex: 'path',
            key: 'path',
        },
        {
            title: 'Create date time',
            dataIndex: 'since',
            key: 'since',
        },
    ];


    return (
        <>
            <div>
                <div className="flex justify-end">
                    <button type="button" onClick={() => setIsList(!isList)}
                        className="py-2.5 float-right px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">{isList ? 'Kategori Ekle' : 'Listeye Dön'}</button>
                </div>
                {isList ?
                    <Table dataSource={dataSource} columns={columns} />
                    : <AddCategories />}
            </div>
        </>
    )
}
Categories.displayName = 'PanelPage'

export default Categories
export const getServerSideProps = adminCheckAuth({});
