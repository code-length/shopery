import React from 'react';
import styles from '../styles/Sidebar.module.scss';
import { Link } from '../types/Link';
import { Button } from '@shopery/ui-shared';

const links: Link[] = [
  {
    name: 'Dashboard',
    link: '/',
    img_link: 'https://www.svgrepo.com/show/520684/dashboard.svg',
    active: true,
  },
  {
    name: 'Products',
    link: '/products',
    img_link: 'https://www.svgrepo.com/show/422038/product.svg',
    active: false,
  },
  {
    name: 'Orders',
    link: '/orders',
    img_link: 'https://www.svgrepo.com/show/533043/cart-shopping.svg',
    active: false,
  },
  {
    name: 'Users',
    link: '/users',
    img_link: 'https://www.svgrepo.com/show/532397/user-shield-alt-1.svg',
    active: false,
  },
];

const Sidebar = () => {
  return (
    <section className={styles.Sidebar}>
      <h2>Admin kit</h2>
      <div className={styles.SidebarNav}>
        <nav>
          <p>Pages</p>
          <ul className={styles.List}>
            {links.map((link, index) => (
              <li key={index} className={styles.Item}>
                <a
                  href={link.link}
                  className={`${styles.Link} ${
                    window.location.href.split('0')[
                      window.location.href.split('0').length - 1
                    ] === link.link && styles.Active
                  }`}
                >
                  <img
                    src={link.img_link}
                    alt={link.name}
                    width={25}
                    className={styles.LinkImg}
                  />
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className={styles.User}>
          <div className={styles.UserInfo}>
            <p>Dmytro</p>
            <img
              src='https://www.svgrepo.com/show/109737/profile-user.svg'
              alt='user-icon'
              width={20}
              style={{ filter: 'invert(1)' }}
            />
          </div>
          <Button size='small' variant='fill'>{`<- Log Out`}</Button>
        </div>
      </div>
    </section>
  );
};

export default Sidebar;
