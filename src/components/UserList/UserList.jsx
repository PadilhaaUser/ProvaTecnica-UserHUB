import { UserCard } from '../UserCard';
import styles from './UserList.module.css';

export const UserList = ({ users, onUserClick }) => {
  return (
    <div className={styles.listContainer}>
      {users.map((user) => (
        <UserCard key={user.id} user={user} onClick={onUserClick} />
      ))}
    </div>
  );
};