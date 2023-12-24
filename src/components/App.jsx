import { Component } from 'react';
import { AppContainer } from './App.styled';
import { Searchbar } from './Searchbar/Searchbar';
import * as API from '../api/api';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';

export class App extends Component {
  state = {
    searchName: '',
    images: [],
    page: 1,
    error: null,
    isLoading: false,
    totalPages: 0,
    isModalOpen: false,
    modalData: null,
  };

  componentDidUpdate(_, prevState) {
    if (
      prevState.searchName !== this.state.searchName ||
      prevState.page !== this.state.page
    ) {
      this.addImages();
    }
  }

  loadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  handleSubmit = query => {
    this.setState({
      searchName: query,
      images: [],
      page: 1,
    });
  };

  handleOpenModal = selectedImage => {
    this.setState({
      isModalOpen: true,
      modalData: selectedImage,
    });
  };

  handleCloseModal = () => {
    this.setState({ isModalOpen: false });
  };

  addImages = async () => {
    const { searchName, page } = this.state;
    try {
      this.setState({ isLoading: true });
      const data = await API.getImages(searchName, page);

      if (data.hits.length === 0) {
        return toast.info('Sorry image not found...', {
          position: toast.POSITION.TOP_RIGHT,
        });
      }

      const normalizedImages = API.normalizedImages(data.hits);

      this.setState(state => ({
        images: [...state.images, ...normalizedImages],
        isLoading: false,
        error: '',
        totalPages: Math.ceil(data.totalHits / 12),
      }));
    } catch (error) {
      this.setState({ error: 'Something went wrong!' });
    } finally {
      this.setState({ isLoading: false });
    }
  };

  render() {
    const { images } = this.state;
    return (
      <AppContainer>
        <Searchbar onSubmit={this.handleSubmit} />
        <ImageGallery images={images} handleOpenModal={this.handleOpenModal} />
        <Button onClick={this.loadMore} title={'Load More'} />
      </AppContainer>
    );
  }
}
