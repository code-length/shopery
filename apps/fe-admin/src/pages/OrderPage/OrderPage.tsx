import { useDeferredValue } from 'react';
import {
  CustomTable,
  CustomSelect,
  CustomInput,
  useModal,
  CustomModal,
} from '@shopery/ui-shared';
import { useForm, Controller, useWatch } from 'react-hook-form';
import styles from './OrderPage.module.scss';
import ActionButtons from '../../components/ActionButtons/ActionButtons';
import { dataSource } from '../../data';

const OrderPage = () => {
  const { openEditOrderModal, openDeleteModal, closeModal } = useModal();
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
          onEdit={() =>
            openEditOrderModal({
              orderId: record.id,
              totalNumberOfProducts: record.totalNumberOfProducts,
              totalPrice: record.totalPrice,
              status: record.status,
              handleSave: (newStatus: string) => {
                dataSource.forEach((item) => {
                  if (item.id === record.id) {
                    item.status = newStatus;
                  }
                });
                closeModal();
              },
            })
          }
          onDelete={() =>
            openDeleteModal({
              handleConfirm: () => {
                const index = dataSource.findIndex(
                  (item) => item.id === record.id
                );
                if (index !== -1) {
                  dataSource.splice(index, 1);
                }
                closeModal();
              },
            })
          }
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
      <CustomModal />
    </section>
  );
};

export default OrderPage;
