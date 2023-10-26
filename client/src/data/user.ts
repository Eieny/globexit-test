import _ from 'lodash';

class User {
  constructor(
    public readonly id: string,
    public readonly name: string,
    public readonly phone: string,
    public readonly email: string,
    public readonly address: string,
    public readonly position: string,
    public readonly department: string,
    public readonly hireDate: Date
  ) {}

  /**
   * Возвращает дату приёма в формате `dd.mm.yyyy`
   */
  get localeDate() {
    return this.hireDate.toLocaleDateString('ru-RU', {
      day: 'numeric',
      month: 'numeric',
      year: 'numeric',
    });
  }

  static create = (
    name: string,
    phone: string,
    email: string,
    address: string,
    position: string,
    department: string,
    hireDate: Date
  ) =>
    new User(
      _.uniqueId(),
      name,
      phone,
      email,
      address,
      position,
      department,
      hireDate
    );
}

export default User;
