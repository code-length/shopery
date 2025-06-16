import { useState } from 'react';
import {
  CustomTable,
  CustomSelect,
  CustomInput,
  CustomButton,
  CustomModal,
} from '@shopery/ui-shared';
import { useForm, Controller, useWatch } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import styles from './OrderPage.module.scss';
import { MdAdd } from 'react-icons/md';
import ActionButtons from '../../components/ActionButtons/ActionButtons';
import { useDeferredValue } from '../../hooks/useDeferredValue';
import Modal from '../../components/Modal/Modal';

const orderSchema = yup
  .object({
    search: yup.string().optional(),
  })
  .required();

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
  const [modalType, setModalType] = useState<any>('add');
  const { control } = useForm({
    resolver: yupResolver(orderSchema),
    defaultValues: {
      search: '',
    },
  });

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
      render: (record) => (
        <ActionButtons
          onEdit={() => handleClick('edit')}
          onDelete={() => handleClick('delete')}
        />
      ),
    },
  ];

  const searchValue = useWatch({ control, name: 'search' });
  const debouncedSearch = useDeferredValue(searchValue?.trim() ?? '', 400);

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

  const handleClick = (type: string) => {
    setOpenModal((prev) => !prev);
    setModalType(type);
  };

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
      <CustomButton onClick={() => handleClick('add')}>
        <MdAdd />
      </CustomButton>
      <Modal isOpen={openModal} modalType={modalType} entity='order' />
    </section>
  );
};

export default OrderPage;
