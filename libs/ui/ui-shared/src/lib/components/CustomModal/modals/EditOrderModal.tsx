import React from 'react';

type EditOrderModalProps = {
  orderId: string;
};

const EditOrderModal = ({ orderId }: EditOrderModalProps) => {
  return <div>EditOrderModal {orderId}</div>;
};

export default EditOrderModal;
