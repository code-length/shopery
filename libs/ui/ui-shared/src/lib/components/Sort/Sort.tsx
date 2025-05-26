import React from 'react';
import { Select } from 'antd';
import styles from './Sort.module.scss';

export const Sort = () => {
  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };

  return (
    <div className={styles.sort}>
      <Select
        defaultValue='Featured'
        prefix='Sort by'
        style={{ width: '100%' }}
        onChange={handleChange}
        options={[
          { value: 'Featured', label: 'Featured' },
          { value: 'Price: low to high', label: 'Price: low to high' },
          { value: 'Price: high to low', label: 'Price: high to low' },
          { value: 'Name', label: 'Name' },
        ]}
      />
    </div>
  );
};

export default Sort;
