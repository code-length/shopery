import { CustomTable, CustomSelect, CustomInput } from '@shopery/ui-shared';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import styles from './OrderPage.module.scss';

const orderSchema = yup
  .object({
    search: yup.string().optional(),
  })
  .required();

const columns = [
  { title: 'Order ID', dataIndex: 'id', key: 'id' },
  { title: 'User', dataIndex: 'userId', key: 'userId' },
  {
    title: 'Total number of products',
    dataIndex: 'totalNumberOfProducts',
    key: 'totalNumberOfProducts',
  },
  { title: 'Total Price', dataIndex: 'totalPrice', key: 'totalPrice' },
  { title: 'Status', dataIndex: 'status', key: 'status' },
];

const dataSource = [
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
    totalNumberOfProducts: 3,
    totalPrice: 75,
    status: 'shipped',
  },
  {
    id: 3,
    userId: 103,
    totalNumberOfProducts: 1,
    totalPrice: 25,
    status: 'delivered',
  },
  {
    id: 4,
    userId: 104,
    totalNumberOfProducts: 5,
    totalPrice: 100,
    status: 'pending',
  },
];

const OrderPage = () => {
  const { control, handleSubmit } = useForm({
    resolver: yupResolver(orderSchema),
    defaultValues: {
      search: '',
    },
  });
  return (
    <section className={styles.orderPage}>
      <h1>Orders</h1>
      <form onSubmit={handleSubmit((data) => console.log('Form data:', data))}>
        <Controller
          name='search'
          control={control}
          render={({ field, fieldState }) => (
            <CustomInput
              placeholder='Search...'
              {...field}
              hasError={!!fieldState.error}
              error={fieldState.error?.message}
            />
          )}
        />
      </form>
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
      <CustomTable columns={columns} dataSource={dataSource} />
    </section>
  );
};

export default OrderPage;
