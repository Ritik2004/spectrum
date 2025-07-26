import React from 'react';
import './ImageUpload.css';

const ImageUpload = ({ onImageUpload }) => {
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        onImageUpload(event.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="image-upload-container">
      <label htmlFor="file-upload" className="custom-file-upload">
        Browse Image
      </label>
      <input id="file-upload" type="file" accept="image/*" onChange={handleImageChange} />
    </div>
  );
};

export default ImageUpload;
