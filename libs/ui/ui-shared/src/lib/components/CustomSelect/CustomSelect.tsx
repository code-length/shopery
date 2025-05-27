import React from 'react';
import { Select } from 'antd';

type CustomSelectProps = {
  prefix?: string;
  onChange?: (value: string) => void;
  options?: { value: string; label: string }[];
};

export const CustomSelect = ({
  prefix,
  onChange,
  options,
}: CustomSelectProps) => {
  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };

  return (
    <Select
      defaultValue={options ? options[0].value : 'Featured'}
      onChange={onChange || handleChange}
      prefix={prefix}
      style={{ width: '30%' }}
      options={options}
    />
  );
};

export default CustomSelect;
