import { Form, Input ,Select} from 'antd';
const layout = {
    labelCol: {
        span: 0,
    },
    wrapperCol: {
        span: 24,
    },
};
const { Option } = Select;

const AddBlog = ({ onFieldsChange }: any) => {
    const [form] = Form.useForm();

    return (
        <div>
            <Form {...layout} form={form} name="control-hooks"
                onValuesChange={onFieldsChange}>
                <Form.Item
                    name="title"
                    rules={[{ required: true, message: 'Boş bırakılamaz' },]}
                >
                    <Input className='bg-transparent' placeholder='Başlık' />
                </Form.Item>
                <Form.Item name="shortDesc"
                    rules={[{ required: true, message: 'Boş bırakılamaz' },]}>
                    <Input className='bg-transparent' placeholder='Ön Yazı' />
                </Form.Item>
                <Form.Item name="tags"
                    rules={[{ required: true, message: 'Boş bırakılamaz' },]}>
                    <Select mode="tags" style={{ width: '100%' }} placeholder="Tags Mode">
                    </Select>
                </Form.Item>
            </Form>
        </div>

    );
};

export default AddBlog;