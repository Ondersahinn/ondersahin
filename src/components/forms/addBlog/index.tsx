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
        span: 24,
    },
};
const tailLayout = {
    wrapperCol: {
        offset: 8,
        span: 16,
    },
};
const { Option } = Select;

const AddBlog = ({ onFieldsChange }: any    ) => {
    const [form] = Form.useForm();
    const dispatch = useDispatch();

    const onFinish = (values: Iresources) => {
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
            <Form {...layout} form={form} name="control-hooks" onFinish={onFinish}
                onValuesChange={onFieldsChange}>
                <Form.Item
                    name="title"
                    rules={[{ required: true, message: 'Boş bırakılamaz' },]}
                >
                    <Input className='bg-transparent' placeholder='Başlık' />
                </Form.Item>
                <Form.Item name="sortDesc"
                    rules={[{ required: true, message: 'Boş bırakılamaz' },]}>
                    <Input className='bg-transparent' placeholder='Ön Yazı' />
                </Form.Item>
            </Form>
        </div>

    );
};

export default AddBlog;