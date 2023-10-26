import User from 'data/user';
import HttpClient from 'utils/http-client';
import IUserService from './user.service';

class UserService implements IUserService {
  constructor(private http: HttpClient) {}

  all = async (): Promise<User[]> => {
    try {
      const res = await this.http.get();
      if (!res.ok) {
        const err = await res.json();
        throw new Error(err);
      }

      const json = await res.json();
      if (!Array.isArray(json)) return [];

      const users = json.map(x =>
        User.create(
          x['name'],
          x['phone'],
          x['email'],
          x['address'],
          x['position_name'],
          x['department'],
          new Date(x['hire_date'])
        )
      );

      return users;
    } catch (e: any) {
      throw new Error(e);
    }
  };

  getByName = async (name: string): Promise<User[]> => {
    try {
      const res = await this.http.get(`?term=${name}`);
      if (!res.ok) {
        const err = await res.json();
        throw new Error(err);
      }

      const json = await res.json();
      if (!Array.isArray(json)) return [];

      const users = json.map(x =>
        User.create(
          x['name'],
          x['phone'],
          x['email'],
          x['address'],
          x['position_name'],
          x['department'],
          new Date(x['hire_date'])
        )
      );

      return users;
    } catch (e: any) {
      throw new Error(e);
    }
  };
}

export default UserService;
