import React from 'react';
import styles from './Sidebar.module.scss';
import { Link, User } from '../../types';
import DashboardIcon from '@assets/icons/dashboard.svg?react';
import ProductIcon from '@assets/icons/product.svg?react';
import OrderIcon from '@assets/icons/order.svg?react';
import UserIcon from '@assets/icons/user.svg?react';
import Navigation from '../Navigation/Navigation';
import UserComponent from '../User/User';

const Sidebar = () => {
  const SIDEBAR_LINKS: Link[] = [
    {
      name: 'Dashboard',
      link: '/',
      iconElement: <DashboardIcon className={styles.icon} />,
    },
    {
      name: 'Products',
      link: '/products',
      iconElement: <ProductIcon className={styles.icon} />,
    },
    {
      name: 'Orders',
      link: '/orders',
      iconElement: <OrderIcon className={styles.icon} />,
    },
    {
      name: 'Users',
      link: '/users',
      iconElement: <UserIcon className={styles.icon} />,
    },
  ];

  const USERS: User[] = [
    {
      id: '1',
      name: 'Dmytro',
      role: 'Admin',
    },
    {
      id: '2',
      name: 'Yehor',
      role: 'Admin',
    },
  ];

  return (
    <section className={styles.sidebar}>
      <h2 className={styles.title}>Admin kit</h2>
      <div className={styles.sidebarNav}>
        <Navigation links={SIDEBAR_LINKS} />
        <UserComponent user={USERS[0]} />
      </div>
    </section>
  );
};

export default Sidebar;
