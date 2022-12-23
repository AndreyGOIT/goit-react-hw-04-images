// import React, { Component } from 'react';
// import { Searchbar } from './Searchbar/Searchbar';
// import { ImageGallery } from './ImageGallery/ImageGallery';
// import Modal from './Modal';
// import { Blocks } from 'react-loader-spinner';
// import { ToastContainer } from 'react-toastify';
// import { LoadMoreBtn } from './Button/Button';
// import { fetchImages } from './FetchImages/FetchImages';

// import { useState } from 'react';
import { Searchbar } from './Searchbar/Searchbar';

export const App = () => {
  // const [query, setQuery] = useState('');

  const onSubmit = query => {
    // setQuery(query);
    console.log(query);
  };

  return (
    <div>
      <Searchbar onSubmit={onSubmit} />
    </div>
  );
};

// export class App extends Component {
//   state = {
//     query: '',
//     images: [],
//     showModal: false,
//     isLoading: false,
//     error: null,
//     largeImage: null,
//     showBtn: false,
//   };

//   toggleModal = () => {
//     this.setState(({ showModal }) => ({ showModal: !showModal }));
//   };

//   onLargeImageURL = largeImageURL => {
//     this.setState(({ showModal }) => ({ showModal: !showModal }));
//     this.setState({ largeImage: largeImageURL });
//   };

//   onSubmit = query => {
//     this.setState({
//       query,
//       images: [],
//       page: 1,
//       isVisible: false,
//       isEmpty: false,
//     });
//   };

//   componentDidUpdate = (_, prevState) => {
//     const { query, page } = this.state;
//     if (prevState.query !== query || prevState.page !== page) {
//       this.getPhotos(query, page);
//     }
//   };
//   getPhotos = (query, page) => {
//     this.setState({ isLoading: true });

//     fetchImages(query, page)
//       .then(response => {
//         if (response) {
//           const newArray = response.hits;
//           const totalHits = response.totalHits;

//           return this.setState(prevState => ({
//             images: [...prevState.images, ...newArray],
//             showBtn: this.state.page < Math.ceil(totalHits / 12),
//           }));
//         }
//       })
//       .catch(error => this.setState({ error }))
//       .finally(() => this.setState({ isLoading: false }));
//   };
//   onLoadMore = () => {
//     this.setState(prevState => ({
//       isVisible: false,
//       page: prevState.page + 1,
//     }));
//   };

//   render() {
//     const { images, showModal, isLoading, error, largeImage, showBtn } =
//       this.state;

//     return (
//       <div>
//         {showModal && (
//           <Modal onClose={this.toggleModal} largeImage={largeImage} />
//         )}
//         <Searchbar onSubmit={this.onSubmit} />
//         {isLoading && (
//           <Blocks
//             visible={true}
//             height="80"
//             width="80"
//             ariaLabel="blocks-loading"
//             wrapperStyle={{}}
//             wrapperClass="blocks-wrapper"
//           />
//         )}
//         {error && <h1>{error.message}</h1>}
//         {images.length > 0 && (
//           <ImageGallery images={images} onClick={this.onLargeImageURL} />
//         )}
//         {showBtn && <LoadMoreBtn onClick={this.onLoadMore} />}
//         <ToastContainer autoClose={3000} />
//       </div>
//     );
//   }
// }
