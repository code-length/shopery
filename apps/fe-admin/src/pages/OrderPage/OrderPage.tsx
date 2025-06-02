import { useState } from 'react';
import {
  CustomTable,
  CustomSelect,
  CustomInput,
  CustomButton,
  CustomModal,
} from '@shopery/ui-shared';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import styles from './OrderPage.module.scss';
import { MdDelete, MdEdit, MdAdd } from 'react-icons/md';
import { useDebounce } from '../../hooks/useDebounce';

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
  {
    title: 'Actions',
    key: 'actions',
    render: () => (
      <span className={styles.ActionButtons}>
        <CustomButton>
          <MdDelete />
        </CustomButton>
        <CustomButton>
          <MdEdit />
        </CustomButton>
      </span>
    ),
  },
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
  const [openModal, setOpenModal] = useState(false);
  const handleClick = () => {
    setOpenModal((prev) => !prev);
  };
  const { control, watch } = useForm({
    resolver: yupResolver(orderSchema),
    defaultValues: {
      search: '',
    },
  });

  const searchValue = watch('search');
  const debouncedSearch = useDebounce(searchValue, 400);

  const filteredData = dataSource.filter((item) => {
    if (!debouncedSearch) return true;
    const searchStr = debouncedSearch.toLowerCase();
    return (
      String(item.id).includes(searchStr) ||
      String(item.userId).includes(searchStr) ||
      String(item.totalNumberOfProducts).includes(searchStr) ||
      String(item.totalPrice).includes(searchStr) ||
      String(item.status).toLowerCase().includes(searchStr)
    );
  });

  return (
    <section className={styles.orderPage}>
      <h1>Orders</h1>
      <form>
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
      <CustomTable columns={columns} dataSource={filteredData} />
      <CustomButton onClick={handleClick}>
        <MdAdd />
      </CustomButton>
      <CustomModal
        open={openModal}
        title='Add new order'
        onCancel={handleClick}
      >
        <h2>Add new order</h2>
        <p>Here you can view and edit order details.</p>
      </CustomModal>
    </section>
  );
};

export default OrderPage;
