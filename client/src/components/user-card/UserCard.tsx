import { ReactComponent as PhoneIcon } from '../../accets/icons/phone.svg';
import { ReactComponent as MailIcon } from '../../accets/icons/mail.svg';
import css from './UserCard.module.css';

type Props = {
  /**
   * Имя юзера.
   */
  name: string;

  /**
   * Номер телефона юзера.
   */
  tel: string;

  /**
   * Почта юзера.
   */
  email: string;

  /**
   * Событие клика по карточке.
   */
  onClick: () => void;
};

/**
 * Карточка юзера.
 */
const UserCard = (props: Props) => {
  const { name, tel, email, onClick } = props;

  // Карточку можно открыть нажатием `Enter`
  const handleEnter = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key !== 'Enter') return;
    onClick();
  };

  return (
    <div
      className={css['card']}
      tabIndex={0}
      onClick={onClick}
      onKeyDown={handleEnter}
    >
      <h2 className={css['header']}>{name}</h2>
      <div className={css['content']}>
        <p>
          <PhoneIcon />
          <span>{tel}</span>
        </p>
        <p>
          <MailIcon />
          <span>{email}</span>
        </p>
      </div>
    </div>
  );
};

export default UserCard;
