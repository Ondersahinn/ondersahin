import { adminCheckAuth } from "@utils/session";


const Blog: React.FC = () => {

    return (
        <>
        </>
    )
}
Blog.displayName = "PanelPage"

export default Blog
export const getServerSideProps = adminCheckAuth({});