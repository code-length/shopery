import { Table } from 'antd';

export function CustomTable({ ...props }) {
  return (
    <Table
      pagination={{
        pageSize: 5,
      }}
      {...props}
    />
  );
}

export default CustomTable;
