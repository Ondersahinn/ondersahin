import { Layout, Menu } from 'antd';
import { ReactNode, useState } from 'react';
import Link from 'next/link';
import { items } from 'src/constants';

interface IProps {
    children: ReactNode;
}


export const PanelLayout: React.FC<IProps> = (props: IProps) => {
    const { Content, Footer, Sider } = Layout;
    const [collapsed, setCollapsed] = useState(false);

    const onCollapse = (collapsed: any) => {
        setCollapsed(collapsed);
    };

    return (
        <>
            <Layout
                className=''
                style={{
                    minHeight: '100vh',
                }}
            >
                <Sider
                    collapsible
                    collapsed={collapsed}
                    onCollapse={onCollapse}
                    style={{
                        overflow: 'auto',
                        height: '100vh',
                        position: 'sticky',
                        left: 0,
                        top: 0,
                        bottom: 0,
                    }}
                >
                    <div className="flex items-center justify-center py-3">
                        <Link href='/' target={'_blank'}>
                            <span className='text-2xl pt-5 font-[inter] cursor-pointer'>
                                Önder Şahin
                            </span>
                        </Link>
                    </div>
                    <Menu
                        defaultSelectedKeys={['1']}
                        defaultOpenKeys={['sub1']}
                        mode="inline"
                        theme="dark"
                        items={items}
                    />
                </Sider>
                <Layout className="site-layou">
                    <Content style={{ margin: '0 16px', }}>
                        <div className="site-layout-background p-[24px] min-h-[360px]">
                            {props.children}
                        </div>
                    </Content>
                    <Footer style={{ textAlign: 'center', }} className='bg-black text-white border-t-[1px] border-gray-400 p-3'>
                        Önder Şahin@Portfolio
                    </Footer>
                </Layout>
            </Layout>
        </>
    )
}

export default PanelLayout;
