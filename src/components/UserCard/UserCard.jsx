import { formatPhone } from '../../utils/helpers';
import styles from './UserCard.module.css';

export const UserCard = ({ user, onClick }) => {
  return (
    <div className={styles.card} onClick={() => onClick(user)}>
      <h3 className={styles.name}>{user.name}</h3>
      <p className={styles.email}>{user.email}</p>
      <p className={styles.phone}>{formatPhone(user.phone)}</p>
    </div>
  );
};