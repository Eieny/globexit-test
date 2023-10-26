import User from 'data/user';
import UserCard from 'components/user-card/UserCard';
import css from './UserList.module.css';

type Props = {
  /**
   * Список юзеров.
   */
  list: User[];

  /**
   * Событие клика по карточке.
   * @param user юзер, по карточке которого кликнули
   */
  onClick: (user: User) => void;
};

/**
 * Список с карточками пользователей. 
 */
const UserList = (props: Props) => {
  const { list, onClick } = props;

  if (!list.length)
    return <h2 className={css['fallback']}>Пользователей не найдено.</h2>;

  return (
    <div className={css['container']}>
      {list.map(x => (
        <UserCard
          key={x.id}
          name={x.name}
          tel={x.phone}
          email={x.email}
          onClick={() => onClick(x)}
        />
      ))}
    </div>
  );
};

export default UserList;
