'use client';

import { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import Image from 'next/image';

import { twMerge } from 'tailwind-merge';

interface ImageUploadProps {
  value?: string;
  onChange?: (value: string) => void;
  disabled?: boolean;
  name?: string; // For form submission
}

export default function ImageUpload({
  value,
  onChange,
  disabled,
  name = 'image',
}: ImageUploadProps) {
  const [isUploading, setIsUploading] = useState(false);
  const [preview, setPreview] = useState(value);

  // If value is provided via props (e.g. from DB), ensure preview and hidden input reflect it
  // However, local preview state allows optimistic UI updates before form submission

  const onDrop = useCallback(
    async (acceptedFiles: File[]) => {
      try {
        setIsUploading(true);
        const file = acceptedFiles[0];
        if (!file) return;

        // Create local preview
        const objectUrl = URL.createObjectURL(file);
        setPreview(objectUrl);

        const formData = new FormData();
        formData.append('file', file);
        formData.append(
          'upload_preset',
          process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET || 'portfolio',
        );

        const uploadResponse = await fetch(
          `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload`,
          {
            method: 'POST',
            body: formData,
          },
        );

        if (!uploadResponse.ok) {
          const errorData = await uploadResponse.text();
          console.error('Upload failed:', errorData);
          throw new Error('Upload failed');
        }

        const data = await uploadResponse.json();

        // Update parent/form
        setPreview(data.secure_url);
        if (onChange) {
          onChange(data.secure_url);
        }
      } catch (error) {
        console.error('Upload failed:', error);
        alert('Upload failed. Check console.');
        setPreview(value); // Revert
      } finally {
        setIsUploading(false);
      }
    },
    [onChange, value],
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { 'image/*': [] },
    maxFiles: 1,
    disabled: disabled || isUploading,
  });

  const removeImage = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setPreview('');
    if (onChange) onChange('');
  };

  return (
    <div className='w-full'>
      {/* Hidden input for server actions */}
      <input type='hidden' name={name} value={preview || ''} />

      <div
        {...getRootProps()}
        className={twMerge(
          'relative border-2 border-dashed rounded-lg p-12 transition-all cursor-pointer hover:border-primary/50 text-center flex flex-col items-center justify-center gap-4 bg-gray-50 dark:bg-zinc-800/50',
          isDragActive && 'border-primary bg-primary/5',
          (disabled || isUploading) && 'opacity-50 cursor-not-allowed',
          preview
            ? 'border-solid p-0 overflow-hidden h-64 border-gray-200 dark:border-gray-700'
            : 'border-gray-300 dark:border-gray-700',
        )}
      >
        <input {...getInputProps()} />

        {preview ? (
          <div className='relative w-full h-full group'>
            <Image
              src={preview}
              alt='Upload preview'
              fill
              className='object-cover'
            />
            <div className='absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center'>
              <p className='text-white font-medium'>Click or Drop to Change</p>
            </div>
            <button
              onClick={removeImage}
              className='absolute top-2 right-2 bg-red-500 text-white p-2 rounded-full hover:bg-red-600 z-10'
              type='button'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='16'
                height='16'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              >
                <path d='M18 6 6 18' />
                <path d='m6 6 12 12' />
              </svg>
            </button>
          </div>
        ) : (
          <>
            <div className='p-4 bg-white dark:bg-zinc-800 rounded-full shadow-sm'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
                className='text-gray-500'
              >
                <path d='M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4' />
                <polyline points='17 8 12 3 7 8' />
                <line x1='12' x2='12' y1='3' y2='15' />
              </svg>
            </div>
            <div className='space-y-1'>
              <p className='text-sm font-medium text-gray-700 dark:text-gray-300'>
                {isUploading
                  ? 'Uploading...'
                  : 'Click to upload or drag and drop'}
              </p>
              <p className='text-xs text-gray-500 dark:text-gray-400'>
                SVG, PNG, JPG or GIF (max 10MB)
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
