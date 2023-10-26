import User from 'data/user';
import Modal from 'components/modal/Modal';
import css from './UserDetailModal.module.css';

type Props = {
  /**
   * Юзер.
   */
  user: User | null;

  /**
   * Открыто ли окно.
   */
  isOpen: boolean;

  /**
   * Событие закрытия окна.
   */
  onClose: () => void;
};

/**
 * Модальное окно с информацией о юзере.
 */
const UserDetailModal = (props: Props) => {
  const { user, isOpen, onClose } = props;

  if (!user) return null;

  return (
    <Modal header={user.name} isOpen={isOpen} onClose={onClose}>
      <div className={css['modal-content']}>
        <div className={css['name']}>Телефон:</div>
        <div className={css['value']}>{user.phone}</div>
        <div className={css['name']}>Почта:</div>
        <div className={css['value']}>{user.email}</div>
        <div className={css['name']}>Дата приёма:</div>
        <div className={css['value']}>{user.localeDate}</div>
        <div className={css['name']}>Должность:</div>
        <div className={css['value']}>{user.position}</div>
        <div className={css['name']}>Подразделение:</div>
        <div className={css['value']}>{user.department}</div>
      </div>
      <div className={css['additional-info']}>
        <p className={css['name']}>Дополнительная информация:</p>
        <p className={css['value']}>
          Разработчики используют текст в качестве заполнителя макта страницы.
          Разработчики используют текст в качестве заполнителя макта страницы.
        </p>
      </div>
    </Modal>
  );
};

export default UserDetailModal;
