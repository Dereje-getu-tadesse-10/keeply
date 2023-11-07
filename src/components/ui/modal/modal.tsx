'use client';
import React, { useCallback, useEffect } from 'react';
import styles from './modal.module.css';
import { useModalStore } from '$/stores/useModalStore';
import { X } from 'lucide-react';
import { Heading, Paragraph } from '..';

export interface ModalProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  subtitle?: string;
  modalId: string;
  size?: 'medium' | 'large';
}

export const Modal: React.FC<ModalProps> = ({
  className,
  modalId,
  ...props
}) => {
  const { toggleModal } = useModalStore();
  const sizeStyle = props.size === 'medium' ? styles.medium : styles.large;

  const escFunction = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        toggleModal(modalId);
      }
    },
    [toggleModal, modalId]
  );

  useEffect(() => {
    window.addEventListener('keydown', escFunction);

    return () => {
      window.removeEventListener('keydown', escFunction);
    };
  }, [escFunction]);

  return (
    <div className={`${styles.modal__container}`}>
      <div className={`${styles.modal} ${sizeStyle}`} {...props}>
        <X
          onClick={() => toggleModal(modalId)}
          cursor={'pointer'}
          className={styles.close_icon}
          size={'20'}
        />
        <div className={styles.modal__header}>
          <Heading as='h2' variant='h2'>
            {props.title}
          </Heading>
          <Paragraph>{props.subtitle}</Paragraph>
        </div>
        {props.children}
      </div>
    </div>
  );
};
