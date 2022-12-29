import styles from './Searchbar.module.css';
import { ImSearch } from 'react-icons/im';
import { useState } from 'react';

export const Searchbar = ({ onSubmit }) => {
  const [query, setQuery] = useState('');
  console.log(query);

  const handleInput = e => {
    const { value } = e.currentTarget;
    setQuery(value.toLowerCase().trim());
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (query === '') {
      alert('Input some word!');
      return;
    }
    onSubmit(query);
    setQuery('');
  };

  return (
    <>
      <header className={styles.Searchbar}>
        <form className={styles.SearchForm} onSubmit={handleSubmit}>
          <button type="submit" className={styles.SearchFormButton}>
            <ImSearch />
          </button>
          <input
            className={styles.SearchFormInput}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={query}
            onChange={handleInput}
          />
        </form>
      </header>
    </>
  );
};
