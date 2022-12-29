import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import styles from '../../components/Modal/Modal.module.css';

const modalRoot = document.querySelector('#modal-root');

export default function Modal({ onClose, largeImage }) {
  useEffect(() => {
    const handleKeyDown = e => {
      // console.log(e.code);
      if (e.code === 'Escape') {
        // console.log('Нажали ESC, нужно закрыть модалку');
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  const handleBackdropClick = event => {
    if (event.currentTarget === event.target) {
      onClose();
    }
  };

  return createPortal(
    <div className={styles.overlay} onClick={handleBackdropClick}>
      <div className={styles.modal}>
        <img src={largeImage} alt="" width={'100%'} />
      </div>
    </div>,
    modalRoot
  );
}
