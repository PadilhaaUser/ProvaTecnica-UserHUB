import { useState } from "react";
import { useUsers } from "./hooks/useUsers";
import { SearchBar } from "./components/SearchBar";
import { UserList } from "./components/UserList";
import { UserDetailsModal } from "./components/UserDetailsModal";
import { filterUsers } from "./utils/helpers"; // Importação do helper
import styles from "./App.module.css";

const App = () => {
  const { users, loading, error } = useUsers();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedUser, setSelectedUser] = useState(null);

  // Usando a função do helper para filtrar
  const filteredUsers = filterUsers(users, searchTerm);

  if (loading)
    return (
      <div className={styles.loading}>
        <div className={styles.spinner}></div>
        Loading users...
      </div>
    );

  if (error)
    return (
      <div className={styles.error}>
        <span className={styles.errorIcon}>⚠️</span>
        Error: {error}
      </div>
    );

  return (
    <div className={styles.app}>
      <header className={styles.header}>
        <h1 className={styles.title}>USERHUB</h1>
        <div className={styles.searchWrapper}>
          <SearchBar onSearch={setSearchTerm} />
        </div>
      </header>

      <main className={styles.mainContent}>
        <UserList users={filteredUsers} onUserClick={setSelectedUser} />
      </main>

      {selectedUser && (
        <UserDetailsModal
          user={selectedUser}
          onClose={() => setSelectedUser(null)}
        />
      )}
    </div>
  );
};

export default App;
