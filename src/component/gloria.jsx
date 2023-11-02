import React, { useState } from 'react';
import axios from 'axios';

const Gloria = () => {
  const [imageSelected, setImageSelected] = useState('');
  const [images, setImages] = useState('');

  const uploadImage = async (file) => {
    try {
      const formData = new FormData();
      formData.append('file', file);
      formData.append('upload_preset', 'x3pud7wu');

      const response = await axios.post(
        'https://api.cloudinary.com/v1_1/dwhufzqgk/image/upload',
        formData
      );

      const secureUrl = response.data?.secure_url;
      setImages(secureUrl);
    } catch (error) {
      console.error('Error uploading image:', error);
    }
  };
if(images){
    console.log(images);
}
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImageSelected(file);
    uploadImage(file);
  };

  return (
    <div>
      <input type="file" onChange={handleImageChange} />
      {images && <img src={images} alt="Uploaded" />}
    </div>
  );
};

export default Gloria;
