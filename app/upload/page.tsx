'use client';
import React from 'react';
import ImageUploader from './add';

const Upload = () => {
  const handleUploadComplete = (url: string, mediaType: string) => {
    console.log('Upload complete:', url, mediaType);
    // Here you can save the URL to your database or handle it as needed
  };

  return (
    <div>
      <ImageUploader onUploadComplete={handleUploadComplete} />
    </div>
  );
};

export default Upload;
