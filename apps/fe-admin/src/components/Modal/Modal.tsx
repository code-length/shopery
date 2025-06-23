import React from 'react';
import {
  AddOrder,
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
  return (
    <CustomModal
      open={isOpen}
      onOk={onSave}
      onCancel={onClose}
      title={modalType}
    >
      Modal
    </CustomModal>
  );
};

export default Modal;
