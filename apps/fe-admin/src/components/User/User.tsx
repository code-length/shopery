import React from 'react';
import { CustomButton } from '@shopery/ui-shared';
import styles from './User.module.scss';
import { User } from '../../types';
import UserAvatarIcon from '@assets/icons/userAvatar.svg?react';

interface UserProps {
  user: User;
}

const UserComponent: React.FC<UserProps> = ({ user }) => {
  return (
    <div className={styles.user}>
      <div className={styles.userInfo}>
        <p className={styles.userName}>{user.name}</p>
        <UserAvatarIcon className={styles.userIcon} />
      </div>
      <CustomButton size='small' variant='fill'>
        {'<- Log Out'}
      </CustomButton>
    </div>
  );
};

export default UserComponent;
