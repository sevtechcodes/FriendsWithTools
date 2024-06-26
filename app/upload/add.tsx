'use client';

import React, { useState, ChangeEvent } from 'react';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import { storage } from '@/lib/firebase';

export interface ImageUploaderProps {
  onUploadComplete: (url: string, mediaType: string) => void;
}

const ImageUploader: React.FC<ImageUploaderProps> = ({ onUploadComplete }) => {
  const [mediaFile, setMediaFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string>('');
  const [progress, setProgress] = useState<number>(0);
  const [mediaType, setMediaType] = useState<string>('');

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setMediaFile(file);
      setPreviewUrl(URL.createObjectURL(file));
      setMediaType(file.type.startsWith('image/') ? 'image' : 'video');
    }
  };

  const handleUpload = async () => {
    if (mediaFile) {
      const storageRef = ref(storage, `files/${mediaFile.name}`);
      const uploadTask = uploadBytesResumable(storageRef, mediaFile);
      uploadTask.on(
        'state_changed',
        (snapshot) => {
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          setProgress(progress);
        },
        (error) => {
          console.error('Upload failed:', error);
        },
        async () => {
          const mediaUrl = await getDownloadURL(uploadTask.snapshot.ref);
          onUploadComplete(mediaUrl, mediaType);
          setMediaFile(null);
          setPreviewUrl('');
          setProgress(0);
        }
      );
    }
  };

  return (
    <div>
      <div>
        <input
          type="file"
          accept="image/*,video/*"
          onChange={handleFileChange}
        />
        <button type="button" onClick={handleUpload} disabled={!mediaFile}>
          Upload
        </button>
        {progress > 0 && (
          <div>
            <div style={{ width: `${progress}%` }}>{progress.toFixed(2)}%</div>
          </div>
        )}
        {previewUrl && (
          <div>
            {mediaType === 'image' ? (
              <img src={previewUrl} width="170px" height="170px" alt="Preview" />
            ) : (
              <video controls width="170px" height="170px">
                <source src={previewUrl} type={mediaFile?.type} />
              </video>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageUploader;
