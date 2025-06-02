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
  return (
    <Select
      defaultValue={options ? options[0].value : 'Featured'}
      onChange={onChange}
      prefix={prefix}
      options={options}
    />
  );
};

export default CustomSelect;
