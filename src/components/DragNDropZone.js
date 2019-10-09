import React from 'react';
import Images from '../assets/images';
import {useDropzone} from 'react-dropzone';

const DragNDropZone = ({onDrop}) => {
  const {getRootProps, getInputProps} = useDropzone({onDrop});

  return (
    <div className="form-files-drop" {...getRootProps()}>
      <input {...getInputProps()} />
      {
        <>
          <img src={Images.cloudUpload} alt="cloud image"/>
          <p className="form-drag-drop-text">Drag and drop file here</p>
          <p className="form-drag-drop-or-text">or</p>
          <p className="form-files-drop-browse">{'browse'}</p>
        </>
      }
    </div>
  );
};

export default DragNDropZone;
