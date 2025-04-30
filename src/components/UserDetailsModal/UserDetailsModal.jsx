import { formatPhone } from '../../utils/helpers';
import styles from './UserDetailsModal.module.css';

export const UserDetailsModal = ({ user, onClose }) => {
  if (!user) return null;

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <button className={styles.closeButton} onClick={onClose}>
          &times;
        </button>
        <h2>{user.name}</h2>
        <div className={styles.detailsGrid}>
          <div>
            <h3>Contact</h3>
            <p>Email: {user.email}</p>
            <p>Phone: {formatPhone(user.phone)}</p>
            <p>Website: {user.website}</p>
          </div>
          <div>
            <h3>Address</h3>
            <p>
              {user.address.street}, {user.address.suite}
            </p>
            <p>
              {user.address.city}, {user.address.zipcode}
            </p>
          </div>
          <div>
            <h3>Company</h3>
            <p>{user.company.name}</p>
            <p>{user.company.catchPhrase}</p>
            <p>{user.company.bs}</p>
          </div>
        </div>
      </div>
    </div>
  );
};