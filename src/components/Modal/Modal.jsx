// import React, { PureComponent } from 'react';
import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import styles from '../../components/Modal/Modal.module.css';

const modalRoot = document.querySelector('#modal-root');

export default function Modal({ onClose, largeImage }) {
  useEffect(() => {
    const handleKeyDown = e => {
      console.log(e.code);
      if (e.code === 'Escape') {
        console.log('Нажали ESC, нужно закрыть модалку');
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    return window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  const handleBackdropClick = event => {
    if (event.currentTarget === event.target) {
      onClose();
    }
  };

  return createPortal(
    <div className={styles.overlay} onClick={handleBackdropClick}>
      <div className={styles.modal}>
        {/* {children} */}
        <img src={largeImage} alt="" width={'100%'} />
      </div>
    </div>,
    modalRoot
  );
}

// export default class Modal extends PureComponent {
//   componentDidMount() {
//     // console.log('Modal componentDidMount');
//     window.addEventListener('keydown', this.handleKeyDown);
//   }

//   componentWillUnmount() {
//     // console.log('Modal conmonentWillUnmount');

//     window.removeEventListener('keydown', this.handleKeyDown);
//   }

// handleKeyDown = e => {
//   console.log(e.code);
//   if (e.code === 'Escape') {
//     console.log('Нажали ESC, нужно закрыть модалку');
//     this.props.onClose();
//   }
// };

// handleBackdropClick = event => {
//   if (event.currentTarget === event.target) {
//     this.props.onClose();
//   }
// };

//   render() {
//     const largeImage = this.props.largeImage;

//     return createPortal(
//       <div className={styles.overlay} onClick={this.handleBackdropClick}>
//         <div className={styles.modal}>
//           {this.props.children}
//           <img src={largeImage} alt="" width={'100%'} />
//         </div>
//       </div>,
//       modalRoot
//     );
//   }
// }
