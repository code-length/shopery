import { Modal } from 'antd';

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
  ...props
}: CustomModalProps) => {
  return (
    <Modal
      {...props}
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
