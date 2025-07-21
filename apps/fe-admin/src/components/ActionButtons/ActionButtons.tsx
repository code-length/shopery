import React from 'react';
import { MdDelete, MdEdit } from 'react-icons/md';
import { CustomButton } from '@shopery/ui-shared';
import styles from './ActionButtons.module.scss';

type ActionButtonsProps = {
  onEdit?: () => void;
  onDelete?: () => void;
};

const ActionButtons = ({ onEdit, onDelete }: ActionButtonsProps) => {
  return (
    <div className={styles.ActionButtons}>
      <CustomButton onClick={onEdit}>
        <MdEdit />
      </CustomButton>
      <CustomButton onClick={onDelete}>
        <MdDelete />
      </CustomButton>
    </div>
  );
};

export default ActionButtons;
