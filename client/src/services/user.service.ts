import User from 'data/user';

interface IUserService {
  /**
   * Получает информацию о всех пользователях.
   */
  all(): Promise<User[]>;

  /**
   * Получает информацию о пользователях, имя которых содержит `name`.
   * @param name строка поиска
   */
  getByName(name: string): Promise<User[]>;
}

export default IUserService;
