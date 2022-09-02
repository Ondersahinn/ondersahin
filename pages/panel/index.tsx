import { Layout } from 'antd';
import { useState } from 'react';
import PanelLayout from '@components/panelLayout';
import { adminCheckAuth, } from '@utils/session';

export const Panel: React.FC = () => {
    const { Content, Footer, Sider } = Layout;
    const [collapsed, setCollapsed] = useState(false);
    const onCollapse = (collapsed: any) => {
        setCollapsed(collapsed);
    };
    Panel.displayName = 'PanelPage'
    Panel.defaultProps = {test:'PanelPage'}

    return (
        <>
            <PanelLayout>
                {/* <Login /> */}
                
            </PanelLayout>

        </>
    )
}


export default Panel;
Panel.displayName = "PanelPage";

export const getServerSideProps = adminCheckAuth({});