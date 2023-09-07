import { Component } from 'react';
import { Searchbar } from '../Searchbar/Searchbar';
import { fetchImagesWithQuery } from '../api/fetchImages';
import { ImageGallery } from '../ImageGallery/ImageGallery';
import { Button } from '../Button/Button';
import { Loader } from '../Loader/Loader';
import { Modal } from '../Modal/Modal';
import { ToastContainer, toast } from 'react-toastify';
import React from 'react';
import { DivApp } from './App.styled';

export class App extends Component {
  state = {
    searchData: '',
    images: [],
    page: 0,
    largeImage: '',
    showModal: false,
    isLoading: false,
    // modalAlt: '',
    error: null,
  };

  componentDidUpdate(prevProps, prevState) {
    const prevPage = prevState.page;
    const prevSearchData = prevState.searchData;
    const { searchData, page, images } = this.state;
    if (prevPage !== page || prevSearchData !== searchData) {
      try {
        this.setState({ isLoading: true });
        const response = fetchImagesWithQuery(searchData, page);
        response.then(data => {
          data.data.hits.length === 0
            ? toast.error('Nothing found')
            : data.data.hits.forEach(({ id, webformatURL, largeImageURL }) => {
                !images.some(image => image.id === id) &&
                  this.setState(({ images }) => ({
                    images: [...images, { id, webformatURL, largeImageURL }],
                  }));
              });
          this.setState({ isLoading: false });
        });
      } catch (error) {
        this.setState({ error: true });
      } finally {
        this.setState({ loading: false });
      }
    }
  }

  onSubmit = searchData => {
    if (searchData.trim() === '') {
      return toast.error('Enter the meaning for search');
    } else if (searchData === this.state.searchData) {
      return;
    }
    this.setState({
      searchData: searchData,
      page: 1,
      images: [],
    });
  };

  nextPage = () => {
    this.setState(({ page }) => ({ page: page + 1 }));
  };

  openModal = i => {
    this.setState(({ images }) => ({
      showModal: true,
      largeImage: images[i].largeImageURL,
    }));
  };

  // toggleModal = () => {
  //   this.setState(({ showModal }) => ({ showModal: !showModal }));
  // };
  toggleModal = () => {
    this.setState(({ showModal }) => ({ showModal: !showModal }));
  };

  render() {
    const { toggleModal, openModal, nextPage, onSubmit } = this;
    const { images, isLoading, largeImage, showModal } = this.state;

    return (
      <DivApp>
        <Searchbar onSubmit={onSubmit} />
        {images.length !== 0 && (
          <ImageGallery images={images} openModal={openModal} />
        )}
        {showModal && (
          <Modal toggleModal={toggleModal} largeImage={largeImage} />
        )}
        {isLoading && <Loader />}
        <ToastContainer autoClose={2500} />
        {images.length >= 12 && <Button nextPage={nextPage} />}
      </DivApp>
    );
  }
}
//   render() {
//     const { toggleModal, openModal, nextPage, onSubmit } = this;
//     const { images, isLoading, largeImage, showModal } = this.state;
//     return (
//       <div
//         style={{
//           display: 'grid',
//           gridTemplateColumns: '1fr',
//           gridGap: '16px',
//           paddingBottom: '24px',
//         }}
//       >
//         {isLoading ? (
//           <Loader />
//         ) : (
//           <React.Fragment>
//             <Searchbar onSubmit={onSubmit} />
//             <ImageGallery onImageClick={openModal} images={images} />
//             {images.length > 0 ? <Button onClick={nextPage} /> : null}
//           </React.Fragment>
//         )}
//         {this.state.modalOpen ? (
//           <Modal src={largeImage} handleClose={toggleModal} />
//         ) : null}
//       </div>
//     );
//   }
