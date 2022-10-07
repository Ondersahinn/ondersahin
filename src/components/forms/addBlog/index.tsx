import { Form, Input } from 'antd';
const layout = {
    labelCol: {
        span: 0,
    },
    wrapperCol: {
        span: 24,
    },
};

const AddBlog = ({ onFieldsChange }: any    ) => {
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
            </Form>
        </div>

    );
};

export default AddBlog;