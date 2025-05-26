import React from 'react';
import { UserType, OrderType, ProductType } from '../../../types';
import Button from '../Button/Button';
import styles from './Table.module.scss';
import { MdEdit, MdDelete } from 'react-icons/md';

export type TableProps<T> = {
  admin: boolean;
  header: string[];
  content: T[];
};

export const Table = <T extends UserType | OrderType | ProductType>({
  admin,
  header,
  content,
}: TableProps<T>) => {
  return (
    <table className={styles.table}>
      <thead>
        <tr>
          {header.map((item, index) => (
            <th key={index}>{item}</th>
          ))}
          {admin && <th>Actions</th>}
        </tr>
      </thead>
      <tbody>
        {content.map((item, index) => (
          <tr key={index}>
            {Object.values(item).map((value, idx) => (
              <td key={idx}>{value.toString()}</td>
            ))}
            {admin && (
              <td colSpan={header.length + 1}>
                <div className={styles.actions}>
                  <Button
                    variant='fill'
                    onClick={() => {
                      console.log('Edit');
                    }}
                  >
                    <MdEdit />
                  </Button>
                  <Button
                    variant='border'
                    onClick={() => {
                      console.log('Delete');
                    }}
                  >
                    <MdDelete />
                  </Button>
                </div>
              </td>
            )}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
