import { CustomModal } from '@shopery/ui-shared';
import React from 'react';

type ModalProps = {
  modalType?: 'add' | 'edit' | 'delete' | null;
  isOpen: boolean;
  onSave: () => void;
  onClose: () => void;
};

const Modal = ({ modalType, isOpen, onClose, onSave }: ModalProps) => {
  return (
    <CustomModal
      open={isOpen}
      onOk={onSave}
      title={modalType}
      onCancel={onClose}
    >
      <div>{modalType}</div>
    </CustomModal>
  );
};

export default Modal;
