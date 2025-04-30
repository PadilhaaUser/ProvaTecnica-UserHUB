import styles from './SearchBar.module.css';

export const SearchBar = ({ onSearch }) => {
  return (
    <div className={styles.searchContainer}>
      <input
        type="text"
        placeholder="Search by name..."
        onChange={(e) => onSearch(e.target.value)}
        className={styles.searchInput}
      />
    </div>
  );
};