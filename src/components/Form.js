import React, {useState, useCallback} from 'react';
import Images from '../assets/images';
import {IconsPerExtension} from '../config';
import DragNDropZone from "./DragNDropZone";

const Form = () => {
  const [email, setEmail] = useState('');
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
        <input className="form-email-input" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <ul>
        {
          files.map(file => {
            const icon = IconsPerExtension[file.type];

            return (
              <li key={file.lastModified}>
                <div className="files-list">
                  <div className="files-list-type-icon-and-name">
                    {
                      icon && <img src={icon} alt="icon"/>
                    }
                    <p className="files-list-file-name">{file.name}</p>
                  </div>
                  <img src={Images.checkIcon} alt="check"/>
                </div>
              </li>
            )
          })
        }
      </ul>
      <div>
        <DragNDropZone onDrop={onDrop}/>
      </div>
      <button type="submit" className="submit-btn">{'Send'}</button>
    </form>
  )
};

export default Form;
