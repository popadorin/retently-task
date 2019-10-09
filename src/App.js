import React from 'react';
import RetinaImage from 'react-retina-image';
import Form from './components/Form';
import Images from './assets/images';
import './App.css';

function App() {
  return (
    <div className="main">
      <div className="form-container">
        <Form/>
      </div>
      <div className="image-container">
        <RetinaImage src={[Images.rightImage, Images.rightImageBig]} alt="right image"/>
      </div>
    </div>
  );
}

export default App;
