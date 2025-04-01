import { Checkbox, CheckboxProps, ConfigProvider } from 'antd';
import React from 'react';

interface CustomCheckboxProps {
  children: string;
  onChange: CheckboxProps['onChange'];
}

const themeConfig = {
  token: {
    colorPrimary: '#00b207',
    controlInteractiveSize: 20,
  },
};

export const CheckboxComponent: React.FC<CustomCheckboxProps> = ({
  children,
  onChange,
}) => (
  <ConfigProvider theme={themeConfig}>
    <Checkbox onChange={onChange}>{children}</Checkbox>
  </ConfigProvider>
);

export default CheckboxComponent;
