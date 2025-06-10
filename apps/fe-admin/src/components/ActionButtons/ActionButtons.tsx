import React from 'react';
import { MdDelete, MdEdit } from 'react-icons/md';
import { CustomButton } from '@shopery/ui-shared';
import styles from './ActionButtons.module.scss';

const ActionButtons = () => {
  return (
    <span className={styles.ActionButtons}>
      <CustomButton>
        <MdDelete />
      </CustomButton>
      <CustomButton>
        <MdEdit />
      </CustomButton>
    </span>
  );
};

export default ActionButtons;
