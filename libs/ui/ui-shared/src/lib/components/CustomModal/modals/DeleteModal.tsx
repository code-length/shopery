import { useModal } from '../useModal';
import Button from '../../CustomButton/CustomButton';

const DeleteModal = ({ ...props }) => {
  const { closeModal } = useModal();
  return (
    <div>
      <h2>Delete Order</h2>
      <p>Are you sure you want to delete this order?</p>
      <Button onClick={() => props.handleConfirm()}>Confirm</Button>
      <Button onClick={() => closeModal()}>Cancel</Button>
    </div>
  );
};

export default DeleteModal;
