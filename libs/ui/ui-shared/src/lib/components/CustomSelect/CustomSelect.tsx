import React from 'react';
import { Select } from 'antd';

export const CustomSelect = ({ ...props }) => {
  return (
    <Select
      defaultValue={props.options ? props.options[0].value : props.defaultValue}
      {...props}
    />
  );
};

export default CustomSelect;
