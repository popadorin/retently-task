import React, {useCallback, useState} from 'react';
import DragNDropZone from "./DragNDropZone";
import {mockFiles} from "../config/mockFiles";
import FileListItem from "./FileListItem";

const Form = () => {
  const [email, setEmail] = useState('ruddy.cream@gmail.com');
  const [files, setFiles] = useState([]);

  const onDrop = useCallback(acceptedFiles => {
    console.log('accepted files: ', acceptedFiles);
    setFiles(prevState => prevState.concat(acceptedFiles));
  }, []);

  return (
    <form className="form">
      <h1 className="form-header">{'Transfer files'}</h1>
      <div>
        <p className="form-email-label">{'Send files to this email:'}</p>
        <input className="form-email-input" type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
      </div>
      <ul>
        {mockFiles.map((file, index) => <FileListItem file={file} index={index}/>)}
      </ul>
      <DragNDropZone onDrop={onDrop}/>
      <button type="submit" className="submit-btn">{'Send'}</button>
    </form>
  )
};

export default Form;
