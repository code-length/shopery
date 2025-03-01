import React from 'react';
import styles from './Sidebar.module.scss';
import { Link, UserInterface } from '../../types';
import Dashboard from '../../assets/images/dashboard.svg';
import Product from '../../assets/images/product.svg';
import Order from '../../assets/images/order.svg';
import User from '../../assets/images/user.svg';
import Navigation from '../Navigation/Navigation';
import UserComponent from '../User/User';

const Sidebar = () => {
  const SIDEBAR_LINKS: Link[] = [
    {
      name: 'Dashboard',
      link: '/',
      imgLink: (
        <img src={Dashboard} alt='dashboard-icon' className={styles.icon} />
      ),
    },
    {
      name: 'Products',
      link: '/products',
      imgLink: <img src={Product} alt='product-icon' className={styles.icon} />,
    },
    {
      name: 'Orders',
      link: '/orders',
      imgLink: <img src={Order} alt='order-icon' className={styles.icon} />,
    },
    {
      name: 'Users',
      link: '/users',
      imgLink: <img src={User} alt='user-icon' className={styles.icon} />,
    },
  ];

  const USERS: UserInterface[] = [
    {
      id: window.crypto.randomUUID(),
      name: 'Dmytro',
      role: 'Admin',
    },
    {
      id: window.crypto.randomUUID(),
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
