import styles from './Searchbar.module.css';
// import { toast } from 'react-toastify';
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

// export class Searchbar extends Component {
//   state = {
//     query: '',
//   };
//   handleInput = e => {
//     const { value } = e.currentTarget;
//     // console.log({ value });
//     this.setState({ query: value.toLowerCase().trim() });
//     // console.log(this.state.query);
//   };
//   handleSubmit = e => {
//     e.preventDefault();
//     const { query } = this.state;
//     // console.log(query);
//     if (query === '') {
//       // toast.error('Input something!');
//       alert('Input some world!');
//       return;
//     }
//     this.props.onSubmit(query);
//     this.setState({ query: '' });
//   };

//   render() {
//     const { query } = this.state;
// return (
//   <>
//     <header className={styles.Searchbar}>
//       <form className={styles.SearchForm} onSubmit={this.handleSubmit}>
//         <button type="submit" className={styles.SearchFormButton}>
//           <ImSearch />
//         </button>
//         <input
//           className={styles.SearchFormInput}
//           type="text"
//           autoComplete="off"
//           autoFocus
//           placeholder="Search images and photos"
//           value={query}
//           onChange={this.handleInput}
//         />
//       </form>
//     </header>
//   </>
// );
//   }
// }
