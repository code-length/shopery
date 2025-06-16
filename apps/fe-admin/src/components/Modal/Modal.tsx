import React from 'react';
import {
  addOrder,
  editOrder,
  deleteOrder,
  addProduct,
  editProduct,
  deleteProduct,
  addUser,
  editUser,
  deleteUser,
} from './modalType';
import { CustomModal } from '@shopery/ui-shared';

type ModalTypeProps = {
  entity: 'order' | 'product' | 'user';
  modalType: 'add' | 'edit' | 'delete';
  isOpen: boolean;
  onClose: () => void;
  onSave: () => void;
};

const Modal = ({
  entity,
  modalType,
  isOpen,
  onClose,
  onSave,
}: ModalTypeProps) => {
  let content;

  switch (entity) {
    case 'order':
      if (modalType === 'add') {
        content = addOrder();
      } else if (modalType === 'edit') {
        content = editOrder();
      } else if (modalType === 'delete') {
        content = deleteOrder();
      }
      break;
    case 'product':
      if (modalType === 'add') {
        content = addProduct();
      } else if (modalType === 'edit') {
        content = editProduct();
      } else if (modalType === 'delete') {
        content = deleteProduct();
      }
      break;
    case 'user':
      if (modalType === 'add') {
        content = addUser();
      } else if (modalType === 'edit') {
        content = editUser();
      } else if (modalType === 'delete') {
        content = deleteUser();
      }
      break;
    default:
      content = <div>Invalid entity or modal type</div>;
  }
  return (
    <CustomModal
      open={isOpen}
      onOk={onSave}
      onCancel={onClose}
      title={modalType}
    >
      {content}
    </CustomModal>
  );
};

export default Modal;
