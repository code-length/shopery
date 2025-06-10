import React from 'react';
import { MdDelete, MdEdit } from 'react-icons/md';
import { CustomButton } from '@shopery/ui-shared';
import styles from './ActionButtons.module.scss';
import { on } from 'events';

type ActionButtonsProps = {
  onClickDelete?: () => void;
  onClickEdit?: () => void;
};

const ActionButtons = ({ onClickDelete, onClickEdit }: ActionButtonsProps) => {
  return (
    <span className={styles.ActionButtons}>
      <CustomButton onClick={onClickDelete}>
        <MdDelete />
      </CustomButton>
      <CustomButton onClick={onClickEdit}>
        <MdEdit />
      </CustomButton>
    </span>
  );
};

export default ActionButtons;
