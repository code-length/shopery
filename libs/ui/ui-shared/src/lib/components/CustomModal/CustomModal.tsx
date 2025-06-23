import { Modal } from 'antd';
import { useModalStore } from './modalStore';
import { modalsMap } from './modalsMap';

export const CustomModal = () => {
  const { modalType, modalProps, closeModal } = useModalStore();

  if (!modalType) return null;

  const ModalComponent = modalsMap[modalType];
  if (!ModalComponent) return null;

  return (
    <Modal
      open={!!modalType}
      onCancel={closeModal}
      footer={null}
      closable={true}
    >
      <ModalComponent {...modalProps} onClose={closeModal} />
    </Modal>
  );
};

export default CustomModal;
