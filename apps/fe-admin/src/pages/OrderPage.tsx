import React from 'react';
import { Table } from '@shopery/ui-shared';

const OrderPage = () => {
  return (
    <section>
      <h1>Orders</h1>
      <Table
        admin={true}
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
