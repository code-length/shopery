import {
  CustomButton,
  CustomInput,
  CustomModal,
  CustomSelect,
  CustomTable,
} from '@shopery/ui-shared';
import { useDeferredValue, useState } from 'react';
import { Controller, useForm, useWatch } from 'react-hook-form';
import ActionButtons from '../../components/ActionButtons/ActionButtons';
import { dataSource } from '../../data';
import styles from './OrderPage.module.scss';

type ModalType = {
  type: 'edit' | 'delete' | null;
  orderId: number | null;
};

const OrderPage = () => {
  const [orderData, setOrderData] = useState(dataSource);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [ModalType, setModalType] = useState<ModalType>({
    type: null,
    orderId: null,
  });
  const { control } = useForm({
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
          onEdit={() => {
            setModalType({ type: 'edit', orderId: record.id });
            setIsModalOpen(true);
          }}
          onDelete={() => {
            setModalType({ type: 'delete', orderId: record.id });
            setIsModalOpen(true);
          }}
        />
      ),
    },
  ];

  const searchValue = useWatch({ control, name: 'search' });
  const debouncedSearch = useDeferredValue(searchValue?.trim() ?? '', 400);

  const filteredData = orderData.filter((item) => {
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

  const handleDelete = (id: number) => {
    setOrderData(orderData.filter((item) => item.id !== id));
    setIsModalOpen(false);
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
      />
      <CustomTable columns={columns} dataSource={filteredData} />
      {ModalType.type === 'edit' && (
        <CustomModal open={isModalOpen} onCancel={() => setIsModalOpen(false)}>
          <h2>Edit Order</h2>
        </CustomModal>
      )}
      {ModalType.type === 'delete' && (
        <CustomModal
          open={isModalOpen}
          onCancel={() => setIsModalOpen(false)}
          title='Delete Order'
          footer={
            <CustomButton
              style={{ backgroundColor: 'red' }}
              onClick={() => {
                setIsModalOpen(false);
                handleDelete(ModalType.orderId as number);
              }}
            >
              Delete
            </CustomButton>
          }
        >
          <h2>Delete Order</h2>
          <p>Are you sure you want to delete this order?</p>
        </CustomModal>
      )}
    </section>
  );
};

export default OrderPage;
