import React from 'react';
import { Table, CustomSelect, CustomInput } from '@shopery/ui-shared';
import styles from './OrderPage.module.scss';

const OrderPage = () => {
  return (
    <section className={styles.orderPage}>
      <h1>Orders</h1>
      <CustomInput placeholder='Search...' />
      <CustomSelect
        prefix='Filter by status:'
        options={[
          { value: 'all', label: 'All' },
          { value: 'pending', label: 'Pending' },
          { value: 'shipped', label: 'Shipped' },
          { value: 'delivered', label: 'Delivered' },
        ]}
        onChange={() => console.log('Filter changed')}
      />
      <Table
        actions={true}
        header={[
          'Order ID',
          'User',
          'Total number of products',
          'Total Price',
          'Status',
        ]}
        content={[
          {
            id: 1,
            userId: 101,
            totalNumberOfProducts: 2,
            totalPrice: 50,
            status: 'pending',
          },
          {
            id: 2,
            userId: 102,
            totalNumberOfProducts: 1,
            totalPrice: 25,
            status: 'shipped',
          },
          {
            id: 3,
            userId: 103,
            totalNumberOfProducts: 3,
            totalPrice: 75,
            status: 'delivered',
          },
        ]}
      />
    </section>
  );
};

export default OrderPage;
