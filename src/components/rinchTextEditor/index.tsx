import { RootState } from '@redux/reducers';
import { changeContent, saveNewTodo } from '@redux/slices/blog';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useDispatch, useSelector } from 'react-redux';

const RinchTextEditor = () => {
  const dispatch = useDispatch();
  const content = useSelector((state: RootState) => state.blogs.content)


  return (
    <>
      <ReactQuill modules={{
        toolbar: {
          container: [
            ['bold', 'italic', 'underline', 'strike', 'blockquote', 'code-block'],
            [{ 'list': 'ordered' }, { 'list': 'bullet' }],
            [{ 'script': 'sub' }, { 'script': 'super' }],
            ['link', 'image']
          ],
        }
      }}
        value={content}
        onChange={(content, delta, source, editor) => {
          dispatch(changeContent(editor.getHTML()))
        }}
        theme="snow" className='text-black' defaultValue=''
      />
    </>);

}

export default RinchTextEditor