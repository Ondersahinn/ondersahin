import { changeCategoriesStatus } from '@redux/slices/categories';
import { Form, Input, notification } from 'antd';
import { Icategories } from 'interfaces/categories';
import { useDispatch } from 'react-redux';
import { http } from 'src/api/http';
const layout = {
    labelCol: {
        span: 0,
    },
    wrapperCol: {
        span: 16,
    },
};
const tailLayout = {
    wrapperCol: {
        offset: 8,
        span: 16,
    },
};

const AddResources = () => {
    const [form] = Form.useForm();
    const dispatch = useDispatch();

    const onFinish = (values: Icategories) => {
        http.post('/api/categories', values).then((res) => {
            dispatch(changeCategoriesStatus('idle'))
            notification.success({
                message: 'Kayıt Başarılı',
                description:
                    'Kategori kayıt edildi listeye gidiniz',
                placement: 'topRight',
            });
        }).catch((res) => {
            notification.error({
                message: res.message,
                description:
                    'Kategori kayıt edilemedi',
                placement: 'topRight',
            });
        })
    };

    return (
        <div>
            <Form {...layout} form={form} name="control-hooks" onFinish={onFinish}>
                <Form.Item
                    name="name"
                    rules={[{ required: true, message: 'Boş bırakılamaz' },]}
                >
                    <Input placeholder='name' />
                </Form.Item>
                <Form.Item name="path"
                    rules={[{ required: true, message: 'Boş bırakılamaz' },]}>
                    <Input placeholder='path' />
                </Form.Item>
                <Form.Item {...tailLayout}>
                    <button type="submit" className='text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"'>
                        Submit
                    </button>
                </Form.Item>
            </Form>
        </div>

    );
};

export default AddResources;