import { IconType } from 'react-icons/lib';

import styles from './SocialMedia.module.scss';

import {
  FaFacebookF,
  FaTwitter,
  FaPinterestP,
  FaInstagram,
} from 'react-icons/fa';
import { useState } from 'react';

interface SocialIcons {
  name: string;
  url: string;
  icon: IconType;
}

const socialIcons: SocialIcons[] = [
  {
    name: 'facebook',
    url: 'https://www.facebook.com/',
    icon: FaFacebookF,
  },
  {
    name: 'twitter',
    url: 'https://twitter.com/',
    icon: FaTwitter,
  },
  {
    name: 'pinterest',
    url: 'https://pinterest.com/',
    icon: FaPinterestP,
  },
  {
    name: 'instagram',
    url: 'https://www.instagram.com/',
    icon: FaInstagram,
  },
];

export default function SocialMedia() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <div className={styles.socialIcons}>
      {socialIcons.map(({ name, url, icon: Icon }) => (
        <div
          key={name}
          className={
            hovered === name
              ? `${styles.activeIcon} ${styles.icon}`
              : styles.icon
          }
          onMouseEnter={() => setHovered(name)}
          onMouseLeave={() => setHovered(null)}
        >
          <a href={url} aria-label={name}>
            <Icon size={18} />
          </a>
        </div>
      ))}
    </div>
  );
}
