import React from 'react';
import dynamic from 'next/dynamic';
import { Controller, useFormContext } from 'react-hook-form';
import 'react-quill/dist/quill.snow.css';

const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });

interface PFQuillProps {
  name: string;
}

const PFQuill = ({ name }:PFQuillProps) => {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <>
          <ReactQuill value={value || ''} onChange={onChange} />
          {error && <p style={{ color: 'red' }}>{error.message}</p>}
        </>
      )}
    />
  );
};

export default PFQuill;