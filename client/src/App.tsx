import { useCallback, useEffect, useState } from 'react';
import { UserList, SearchInput, UserDetailModal } from 'components';
import User from 'data/user';
import UserService from 'services/user.remote';
import HttpClient from 'utils/http-client';
import css from './App.module.css';

const http = new HttpClient();
const services = new UserService(http);

type Props = { onError: (message?: string) => void };

function App(props: Props) {
  const { onError } = props;
  const [isModalOpen, toggleModal] = useState(false);
  const [users, setUsers] = useState<User[]>([]);
  const [selectedUser, selectUser] = useState<User | null>(null);

  const getAllUsers = useCallback(async () => {
    try {
      const res = await services.all();
      setUsers(res);
    } catch (e: any) {
      onError('Ошибка во время загрузки пользователей');
    }
  }, [onError]);

  const getUserByName = async (searchStr: string) => {
    try {
      const res = await services.getByName(searchStr);
      setUsers(res);
    } catch (e: any) {
      onError('Ошибка во время поиска пользователей');
    }
  };

  const handleClose = () => {
    toggleModal(false);
    selectUser(null);
  };

  useEffect(() => {
    getAllUsers();
  }, [getAllUsers]);

  useEffect(() => {
    if (!selectedUser || isModalOpen) return;
    toggleModal(true);
  }, [selectedUser, isModalOpen]);

  return (
    <div className={css['App']}>
      <main>
        <SearchInput onSearch={getUserByName} isInstantSearch />
        <UserList list={users} onClick={selectUser} />
        <UserDetailModal
          user={selectedUser}
          isOpen={isModalOpen}
          onClose={handleClose}
        />
      </main>
    </div>
  );
}

export default App;
