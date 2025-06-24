import React from 'react';
import { Table } from 'antd';

export function CustomTable({ ...props }) {
  return (
    <Table
      {...props}
      pagination={{
        pageSize: 5,
      }}
    />
  );
}

export default CustomTable;
