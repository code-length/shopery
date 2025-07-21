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
  ...props
}: CustomInputProps) => {
  return (
    <Input
      {...props}
      placeholder={placeholder}
      size='large'
      onChange={onChange}
      allowClear
      status={hasError ? 'error' : undefined}
    />
  );
};

export default CustomInput;
