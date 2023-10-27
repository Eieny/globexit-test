import { useEffect, useState } from 'react';
import { UserList, SearchInput, UserDetailModal } from 'components';
import User from 'data/user';
import UserService from 'services/user.remote';
import HttpClient from 'utils/http-client';
import css from './App.module.css';

const http = new HttpClient();
const services = new UserService(http);

function App() {
  const [isModalOpen, toggleModal] = useState(false);
  const [users, setUsers] = useState<User[]>([]);
  const [selectedUser, selectUser] = useState<User | null>(null);

  const getAllUsers = async () => {
    const res = await services.all();
    setUsers(res);
  };

  const getByName = async (searchStr: string) => {
    const res = await services.getByName(searchStr);
    setUsers(res);
  };

  const handleClose = () => {
    toggleModal(false);
    selectUser(null);
  };

  useEffect(() => {
    getAllUsers();
  }, []);

  useEffect(() => {
    if (!selectedUser || isModalOpen) return;
    toggleModal(true);
  }, [selectedUser, isModalOpen]);

  return (
    <div className={css['App']}>
      <main>
        <SearchInput onSearch={getByName} isInstantSearch />
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
