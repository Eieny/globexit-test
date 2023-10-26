import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { ReactComponent as CloseIcon } from '../../accets/icons/close.svg';
import css from './Modal.module.css';

type Props = {
  /**
   * Заголовок.
   */
  header: string;

  /**
   * Открыто ли окно.
   */
  isOpen: boolean;

  /**
   * Событие закрытия окна.
   */
  onClose: () => void;
  children?: JSX.Element[] | JSX.Element | string;
};

/**
 * Хук добавляет слушатель события `keydown` на страницу.
 * @param callback событие, которые срабатывает при нажатии `Esc`
 */
const useEscapeClick = (callback: () => void) => {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key !== 'Escape') return;
      callback();
    };
    document.addEventListener('keydown', handleEscape);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'auto';
    };
  }, [callback]);
};

/**
 * Модальное окно.
 */
const Modal = (props: Props) => {
  const { isOpen, header, onClose, children } = props;
  useEscapeClick(onClose);

  if (!isOpen) return null;

  return (
    <>
      {createPortal(
        <div className={css['modal']}>
          <div className={css['backdrop']} aria-hidden onClick={onClose}></div>
          <div className={css['container']}>
            <div className={css['header']}>
              <h2>{header}</h2>
              <button aria-label='Закрыть карточку' onClick={onClose}>
                <CloseIcon />
              </button>
            </div>
            {children}
          </div>
        </div>,
        document.body
      )}
    </>
  );
};

export default Modal;
