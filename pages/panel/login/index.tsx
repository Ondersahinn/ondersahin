

import React from 'react'
import { Button, notification, Form, Input, Tabs } from 'antd';
import axios from 'axios';
import { withIronSessionSsr } from 'iron-session/next';
import { GetServerSidePropsContext, PreviewData } from 'next';
import { ParsedUrlQuery } from 'querystring';
import { sessionOptions } from '@utils/session';
import { getIronSession } from 'iron-session';
import { useRouter } from 'next/router';
const { TabPane } = Tabs;

const Login: React.FC = () => {

    const router = useRouter();

    const onFinish = (values: any) => {
        axios.post('/api/user/login', values).then(res => {
            if (res.data.status === 200) {
                debugger
                if (res.data.data.user.admin) {
                    router.push('/panel')
                }
                else {
                    notification.error({
                        message: 'Admin yetkisine sahip değilsin',
                        description:
                            'Lütfen yetki için iletişime geçiniz.',
                        placement: 'topRight',
                    });
                }
            }
            else {
                notification.error({
                    message: 'Bir şeyler ters gitti',
                    description: res.data.message,
                    placement: 'topRight',
                });
            }
        }).catch((res) => {
            notification.error({
                message: 'Bir şeyler ters gitti',
                description: res.message,
                placement: 'topRight',
            });
        })


    };

    return (
        <Tabs defaultActiveKey="1" type='line'  >
            <TabPane tab="Giriş Yap" key="1"  >
                <Form
                    name="login"
                    wrapperCol={{ span: 16 }}
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    autoComplete="off"
                >
                    <Form.Item
                        name="email"
                        rules={[{ required: true, message: 'Please input your email!' }]}
                    >
                        <Input placeholder="Email" className='p-3 rounded-lg text-md bg-[#eeeeee]' />
                    </Form.Item>
                    <Form.Item
                        name="password"
                        rules={[{ required: true, message: 'Please input your password!' }]}
                    >
                        <Input.Password placeholder="Password" className='login-input-password p-3 rounded-lg text-md bg-[#eeeeee]' />
                    </Form.Item>

                    <Button htmlType="submit" className='bg-primary-base text-white w-full flex justify-center  p-6  rounded-lg  text-md items-center max-w-md'>
                        Giriş Yap
                    </Button>
                </Form>
            </TabPane>

        </Tabs>
    )
}

export default Login

export const getServerSideProps = withIronSessionSsr(async (context: GetServerSidePropsContext<ParsedUrlQuery, PreviewData>) => {
    try {
        const session = await getIronSession(context.req, context.res, sessionOptions);
        console.log('admin', session.user?.admin)
        if (!!session.user && session.user.admin) {
            return {
                redirect: {
                    permanent: false,
                    destination: "/panel",
                },
            };
        }
        return {
            props: {
                permanent: false,
            },
        };
    } catch (err) {
        return {
            redirect: {
                permanent: false,
                destination: "/",
            },
        };

    }
}, sessionOptions)