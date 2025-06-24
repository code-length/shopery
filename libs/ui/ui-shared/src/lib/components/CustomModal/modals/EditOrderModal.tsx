import { Button } from 'antd';
import CustomSelect from '../../CustomSelect/CustomSelect';
import { useState } from 'react';

const EditOrderModal = ({ ...props }) => {
  const [status, setStatus] = useState(props.status);
  return (
    <div>
      Edit
      <div>
        <h2>Order №{props.orderId}</h2>
        <p>Total number of products {props.totalNumberOfProducts}</p>
        <p>Total Price {props.totalPrice}</p>
        <p>
          Status:
          <CustomSelect
            options={[
              { value: 'pending', label: 'Pending' },
              { value: 'shipped', label: 'Shipped' },
              { value: 'delivered', label: 'Delivered' },
            ]}
            defaultValue={props.status}
            onChange={(value: string) => setStatus(value)}
          />
        </p>
      </div>
      <Button type='primary' onClick={() => props.handleSave(status)}>
        Save
      </Button>
    </div>
  );
};

export default EditOrderModal;
