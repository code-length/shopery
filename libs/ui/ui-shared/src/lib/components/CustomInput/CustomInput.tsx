import React from 'react';
import { Input } from 'antd';

export type CustomInputProps = {
  placeholder?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  hasError?: boolean;
};

export const CustomInput = ({
  placeholder,
  onChange,
  error,
  hasError,
}: CustomInputProps) => {
  return (
    <div>
      <Input
        placeholder={placeholder}
        size='large'
        onChange={onChange}
        allowClear
        status={hasError ? 'error' : undefined}
      />
      {hasError && error && (
        <div style={{ color: 'red', marginTop: 4, fontSize: 12 }}>{error}</div>
      )}
    </div>
  );
};

export default CustomInput;
