import React from 'react';
import { Button } from '@shopery/ui-shared';
import styles from './User.module.scss';
import { UserInterface } from '../../types';

interface UserProps {
  user: UserInterface;
}

const User: React.FC<UserProps> = ({ user }) => {
  return (
    <div className={styles.user}>
      <div className={styles.userInfo}>
        <p className={styles.userName}>{user.name}</p>
        <img
          src='https://www.svgrepo.com/show/109737/profile-user.svg'
          alt='user-icon'
          className={styles.userIcon}
        />
      </div>
      <Button size='small' variant='fill'>
        {'<- Log Out'}
      </Button>
    </div>
  );
};

export default User;
