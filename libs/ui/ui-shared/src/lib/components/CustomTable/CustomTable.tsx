import React from 'react';
import { Table } from 'antd';
import type { TableProps as AntTableProps, ColumnsType } from 'antd/es/table';

export function CustomTable<T>({ ...props }) {
  return <Table {...props} />;
}

export default CustomTable;
