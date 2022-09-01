import { Layout, Menu } from 'antd';
import { useState } from 'react';
// import { Login } from '@components';
// import { items } from 'contants';
import PanelLayout from '@components/panelLayout';
import { NextApiRequest } from 'next';

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

// export async function getServerSideProps(req: NextApiRequest) {
//     const user = req.session?.user;
//     if (!!user && user.admin) {
//         return {
//             props: {
//                 user
//             }
//         }
//     }

//     else {
//         return {
//             redirect: {
//                 permanent: false,
//                 destination: "/",
//             },
//             props: {},
//         }
//     }
// }