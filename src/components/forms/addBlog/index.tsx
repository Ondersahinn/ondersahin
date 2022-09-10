import { fetchResources } from '@redux/slices/translation';
import { Form, Input, notification, Select } from 'antd';
import { Iresources } from 'interfaces/categories';
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
const { Option } = Select;

const AddResources = () => {
    const [form] = Form.useForm();
    const dispatch = useDispatch();

    const onFinish = (values: Iresources) => {
        console.log('values', values)
        http.post('/api/resources', values).then((res) => {
            dispatch(fetchResources('all'))
            notification.success({
                message: 'Kayıt Başarılı',
                description:
                    'Resource kayıt edildi listeye gidiniz',
                placement: 'topRight',
            });
        }).catch((res) => {
            notification.error({
                message: res.message,
                description:
                    'Resource kayıt edilemedi',
                placement: 'topRight',
            });
        })
    };

    return (
        <div>
            <Form {...layout} form={form} name="control-hooks" onFinish={onFinish}>
                <Form.Item
                    name="key"
                    rules={[{ required: true, message: 'Boş bırakılamaz' },]}
                >
                    <Input placeholder='key' />
                </Form.Item>
                <Form.Item name="value"
                    rules={[{ required: true, message: 'Boş bırakılamaz' },]}>
                    <Input placeholder='value' />
                </Form.Item>
                <Form.Item name="lang"
                    rules={[{ required: true, message: 'Boş bırakılamaz' },]}>
                    <Select placeholder='Dil seçiniz'>
                        <Option value="tr">TR</Option>
                        <Option value="en">EN</Option>
                    </Select>
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