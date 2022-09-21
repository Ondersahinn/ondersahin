import {  changeContent, saveNewTodo } from '@redux/slices/blog';
import React, { useState, useRef } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useSelector, useDispatch } from 'react-redux';
import { http } from 'src/api/http';

function MyComponent() {
  const [value, setValue] = useState('');
  const [isCreate, setIsCreate] = useState(false);
  const dispatch = useDispatch()
  const quillRef = useRef();
  const imageHandler = () => {
    debugger
    const input = document.createElement("input");
    const formData = new FormData();
    const editor = quillRef.current.getEditor();


    input.setAttribute("type", "file");
    input.setAttribute("accept", "image/*");
    input.click();

    input.onchange = async () => {
      const file = input.files;
      if (file !== null) {
        formData.append("image", file[0]);
        const config = {
            headers: { 'content-type': 'multipart/form-data' },
            validateStatus: (status) => true,
        };
        const response = await http.post('/api/upload', formData, config);
        if (response.data.statusCode === 200) {
            alert("Dosya yüklendi")
        }
        else {
            alert("Dosya yüklenemedi")
        }
        editor.insertEmbed(editor.getSelection(), "image", 'https://ondersahin.com.tr//images/onderlogo.png?auto=format&fit=max&w=640');

        console.log(file)
      }
    }
  }

  // const content = useSelector((state) => state.categories.content)
      // console.log('content', content)


    return (
      <>
        <button className='bg-black' onClick={() => dispatch(saveNewTodo())}>Kaydet</button>
        <ReactQuill ref={quillRef} modules={{
          toolbar: {
            container: [
              ['bold', 'italic', 'underline', 'strike', 'blockquote', 'code-block'],
              [{ 'list': 'ordered' }, { 'list': 'bullet' }],
              [{ 'script': 'sub' }, { 'script': 'super' }],
              ['link', 'image']
            ],
            handlers: {
              image: imageHandler, //Add it here
            },
          }
        }}
          // onChangeSelection={(range, source, editor) => }
          onChange={(content, delta, source, editor) => {
            // debugger
            dispatch(changeContent(editor.getHTML()))
            // setValue(editor.getHTML())
          }}
          theme="snow" defaultValue=''
        />
      </>);
  
}

export default MyComponent