import { Modal } from 'antd';

export type CustomModalProps = {
  children: React.ReactNode;
  open: boolean;
  onCancel?: () => void;
  onOk?: () => void;
  title?: string;
  footer?: React.ReactNode | null;
};

export const CustomModal = ({
  children,
  open,
  onCancel,
  onOk,
  title,
  footer,
  ...props
}: CustomModalProps) => {
  return (
    <Modal
      open={open}
      title={title}
      onCancel={onCancel}
      onOk={onOk}
      closable={true}
      footer={footer ?? null}
      {...props}
    >
      {children}
    </Modal>
  );
};

export default CustomModal;
