import React from 'react';
import { Button } from '@shopery/ui-shared';
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
      <Button size='small' variant='fill'>
        {'<- Log Out'}
      </Button>
    </div>
  );
};

export default UserComponent;
