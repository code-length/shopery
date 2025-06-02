import React from 'react';
import { Table } from 'antd';
import type { TableProps as AntTableProps, ColumnsType } from 'antd/es/table';

export type CustomTableProps<T> = {
  columns: ColumnsType<T>;
  dataSource: T[];
  rowKey?: string;
  pagination?: boolean;
};

export function CustomTable<T extends object>({
  columns,
  dataSource,
  rowKey = 'id',
  pagination = false,
}: CustomTableProps<T>) {
  return <Table columns={columns} dataSource={dataSource} rowKey={rowKey} />;
}

export default CustomTable;
