
import { RootState } from '@redux/reducers';
import dynamic from 'next/dynamic'
import { useSelector } from 'react-redux';
var RinchTextEditor = dynamic(() => import("@components/rinchTextEditor"), {
    ssr: false, loading: () => <p>Loading ...</p>
  })
const BlogAdd: React.FC = () => {

    return (
        <>
            <RinchTextEditor />
        </>
    )
}
BlogAdd.displayName = "PanelPage"
export default BlogAdd