'use client';
import React from 'react';
import styles from './modal.module.css';
import { useModalStore } from '$/stores/useModalStore';
import { X } from 'lucide-react';

export interface ModalProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  subtitle?: string;
}

export const Modal: React.FC<ModalProps> = ({ className, ...props }) => {
  const { toggleModal } = useModalStore();
  return (
    <div className={styles.modal__backdrop}>
      <div className={styles.modal} {...props}>
        <X
          onClick={toggleModal}
          cursor={'pointer'}
          className={styles.close_icon}
          size={'20'}
        />
        <div className={styles.modal__header}>
          <h2 className={styles.modal__title}>{props.title}</h2>
          <p className={styles.modal__subtitle}>{props.subtitle}</p>
        </div>
        {props.children}
      </div>
    </div>
  );
};
