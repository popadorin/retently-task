import React from 'react';
import Images from '../assets/images';
import ProgressBar from './ProgressBar';
import {IconsPerExtension} from '../config';

const FileListItem = ({file, index}) => {
  const icon = IconsPerExtension[file.type];
  const progress = file.loadProgress;

  return (
    <li className={index !== 0 ? 'form-list-item' : ''} key={file.lastModified}>
      <div className="file">
        {icon && <img src={icon} alt="icon"/>}
        <div className="file-name-and-progress-bar">
          <div className="file-name-and-progress-status">
            <p className={file.type === 'text/css' ? 'file-name-css' : 'file-name'}>
              {file.name}
            </p>
            {
              progress === 100
                ? <img src={Images.checkIcon} alt="check"/>
                : <span className="form-list-item-progress">{`${progress}%`}</span>
            }
          </div>
          {progress && progress !== 100 && <ProgressBar percentage={progress}/>}
        </div>
      </div>
    </li>
  );
};

export default FileListItem;
