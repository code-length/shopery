import { Modal } from 'antd';

type CustomModalProps = {
  children: React.ReactNode;
  title: string;
  open?: boolean;
  onOk?: () => void;
  onCancel?: () => void;
};

export const CustomModal = ({ children, ...props }: CustomModalProps) => {
  return (
    <Modal {...props} closable={true}>
      {children}
    </Modal>
  );
};

export default CustomModal;
