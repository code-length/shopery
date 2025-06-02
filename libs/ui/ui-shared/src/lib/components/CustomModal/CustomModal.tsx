import { useState } from 'react';
import { Modal } from 'antd';
import { Button } from '../Button/Button';

type CustomModalProps = {
  children: React.ReactNode;
  title: string;
  open?: boolean;
  onOk?: () => void;
  onCancel?: () => void;
};

export const CustomModal = ({
  children,
  title,
  open,
  onOk,
  onCancel,
}: CustomModalProps) => {
  return (
    <Modal
      title={title}
      closable={{ 'aria-label': 'Custom Close Button' }}
      open={open}
      onOk={onOk}
      onCancel={onCancel}
    >
      {children}
    </Modal>
  );
};

export default CustomModal;
