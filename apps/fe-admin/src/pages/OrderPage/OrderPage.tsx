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

const OrderPage = () => {
  const [orderData, setOrderData] = useState(dataSource);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [orderId, setOrderId] = useState<number | null>(null);
  const [editStatus, setEditStatus] = useState<string | null>(null);
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
          onEdit={() => handleOpenEditModal(record.id, record.status)}
          onDelete={() => handleOpenDeleteModal(record.id)}
        />
      ),
    },
  ];

  const statusOptions = [
    { value: 'pending', label: 'Pending' },
    { value: 'shipped', label: 'Shipped' },
    { value: 'delivered', label: 'Delivered' },
  ];

  const handleOpenEditModal = (id: number, status: string) => {
    setOrderId(id);
    setIsEditModalOpen(true);
    setEditStatus(status);
  };

  const handleOpenDeleteModal = (id: number) => {
    setOrderId(id);
    setIsDeleteModalOpen(true);
  };

  const searchValue = useWatch({ control, name: 'search' });
  const debouncedSearch = useDeferredValue(searchValue?.trim() ?? '', 400);

  const filteredData = orderData.filter((item) => {
    if (!debouncedSearch) return true;
    const searchStr = debouncedSearch.toLowerCase();

    const matchesSearch = [
      item.id,
      item.userId,
      item.totalNumberOfProducts,
      item.totalPrice,
      item.status?.toLowerCase(),
    ].some((field) => String(field).includes(searchStr));

    return matchesSearch;
  });

  const handleDelete = (id: number) => {
    setOrderData(orderData.filter((item) => item.id !== id));
    setIsDeleteModalOpen(false);
    setOrderId(null);
  };

  const handleSave = () => {
    if (typeof editStatus !== 'string') return;
    setOrderData((prev) =>
      prev.map((item) => {
        if (item.id === orderId) {
          return { ...item, status: editStatus };
        }
        return item;
      })
    );
    setIsEditModalOpen(false);
    setEditStatus(null);
    setOrderId(null);
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
        options={[{ value: 'all', label: 'All' }, ...statusOptions]}
      />
      <CustomTable columns={columns} dataSource={filteredData} />
      <CustomModal
        open={isEditModalOpen}
        onCancel={() => setIsEditModalOpen(false)}
        title='Edit Order'
        footer={
          <CustomButton variant='fill' onClick={() => handleSave()}>
            Save
          </CustomButton>
        }
      >
        <CustomSelect
          value={editStatus}
          options={statusOptions}
          onChange={(value: string) => setEditStatus(value)}
        />
      </CustomModal>
      <CustomModal
        open={isDeleteModalOpen}
        onCancel={() => setIsDeleteModalOpen(false)}
        title='Delete Order'
        footer={
          <CustomButton
            variant='danger'
            onClick={() => {
              handleDelete(orderId as number);
            }}
          >
            Delete
          </CustomButton>
        }
      >
        <p>Are you sure you want to delete this order?</p>
      </CustomModal>
    </section>
  );
};

export default OrderPage;
