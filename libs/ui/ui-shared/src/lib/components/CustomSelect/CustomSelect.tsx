import React from 'react';
import { Select } from 'antd';

export const CustomSelect = ({ ...props }) => {
  return (
    <Select
      defaultValue={props.options ? props.options[0].value : undefined}
      {...props}
    />
  );
};

export default CustomSelect;
