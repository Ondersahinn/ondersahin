
import AddBlog from '@components/forms/addBlog'
import PanelHeader from '@components/panelHeader'
import { adminCheckAuth } from '@utils/session'
import dynamic from 'next/dynamic'
var RinchTextEditor = dynamic(() => import("@components/rinchTextEditor"), {
    ssr: false, loading: () => <p>Loading ...</p>
})
const BlogAdd: React.FC = () => {

    const onFieldsChange = (changedValues: any, allValues: any) => {
        console.log('11-ADD', allValues, changedValues)
    }

    return (
        <>
            <PanelHeader title='Blog Ekle'  />
            <AddBlog onFieldsChange={onFieldsChange} />
            <RinchTextEditor />
        </>
    )
}
BlogAdd.displayName = "PanelPage"
export default BlogAdd
export const getServerSideProps = adminCheckAuth({});
