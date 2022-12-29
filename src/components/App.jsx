import { ImageGallery } from './ImageGallery/ImageGallery';
import Modal from './Modal';
import { Blocks } from 'react-loader-spinner';
import { LoadMoreBtn } from './Button/Button';
import { useEffect, useState } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { fetchImages } from './FetchImages/FetchImages';

export const App = () => {
  const [query, setQuery] = useState('');
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [showBtn, setShowBtn] = useState(false);
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [largeImage, setLargeImage] = useState(null);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const onSubmit = query => {
    setQuery(query);
    setImages([]);
    setPage(1);
    setIsLoading(false);
  };

  const onLargeImageURL = largeImageURL => {
    setShowModal(!showModal);
    setLargeImage(largeImageURL);
  };

  useEffect(() => {
    if (!query) {
      return;
    }
    setIsLoading(true);

    fetchImages(query, page)
      .then(response => {
        if (response) {
          const newArray = response.hits;
          const totalHits = response.totalHits;

          return (
            setImages(prevImages => [...prevImages, ...newArray]),
            setShowBtn(page < Math.ceil(totalHits / 12))
          );
        }
      })
      .catch(error => setError({ error }))
      .finally(() => setIsLoading(false));
  }, [query, page]);

  const onLoadMore = () => {
    setPage(page + 1);
  };

  return (
    <div>
      {showModal && <Modal onClose={toggleModal} largeImage={largeImage} />}
      <Searchbar onSubmit={onSubmit} />
      {isLoading && (
        <Blocks
          visible={true}
          height="80"
          width="80"
          ariaLabel="blocks-loading"
          wrapperStyle={{}}
          wrapperClass="blocks-wrapper"
        />
      )}
      {error && <h1>{error.message}</h1>}
      {images.length > 0 && (
        <ImageGallery images={images} onClick={onLargeImageURL} />
      )}
      {showBtn && <LoadMoreBtn onClick={onLoadMore} />}
    </div>
  );
};
