'use client';
import React from 'react';
import styles from './modal.module.css';
import { useModalStore } from '$/stores/useModalStore';
import { X } from 'lucide-react';

export interface ModalProps extends React.HTMLAttributes<HTMLDivElement> {}

export const Modal: React.FC<ModalProps> = ({ className, ...props }) => {
  const { isOpen, toggleModal } = useModalStore();
  return (
    <div className={styles.modal__backdrop}>
      <div className={styles.modal} {...props}>
        <div className={styles.modal__header}>
          {props.title ? <h2>{props.title}</h2> : <h2>Modal Title</h2>}
          <X onClick={toggleModal} cursor={'pointer'} />
        </div>
        {props.children}
      </div>
    </div>
  );
};
