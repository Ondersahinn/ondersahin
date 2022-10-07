
import AddBlog from '@components/forms/addBlog'
import PanelHeader from '@components/panelHeader'
import { RootState } from '@redux/reducers'
import { adminCheckAuth } from '@utils/session'
import { notification } from 'antd'
import dynamic from 'next/dynamic'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { http } from 'src/api/http'
import { useRouter } from 'next/router'
var RinchTextEditor = dynamic(() => import("@components/rinchTextEditor"), {
    ssr: false, loading: () => <p>Loading ...</p>
})

interface IFieldsValue {
    title: string
    shortDesc: string
}
const BlogAdd: React.FC = () => {
    const [formFieldsValue, setFormFieldsValue] = useState<IFieldsValue>()
    const content = useSelector((state: RootState) => state.blogs.content)
    const router = useRouter()

    const onFieldsChange = (changedValues: any, allValues: IFieldsValue) => {
        setFormFieldsValue(allValues)
    }

    const handleSubmit = () => {
        http.post('/api/blog/add', { ...formFieldsValue, description: content }).then((res) => {
            notification.success({
                message: 'Kayıt Başarılı',
                description:
                    'Blog kayıt edildi listeye gidiniz',
                placement: 'topRight',
            });
            router.push('/panel/blog/list')
        }).catch((res) => {
            notification.error({
                message: res.message,
                description:
                    'Blog kayıt edilemedi',
                placement: 'topRight',
            });
        })
    }

    return (
        <>
            <PanelHeader title='Blog Ekle' handleSubmit={handleSubmit} />
            <AddBlog onFieldsChange={onFieldsChange} />
            <RinchTextEditor />
        </>
    )
}
BlogAdd.displayName = "PanelPage"
export default BlogAdd
export const getServerSideProps = adminCheckAuth({});
