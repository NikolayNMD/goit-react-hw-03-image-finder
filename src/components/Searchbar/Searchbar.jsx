import { Component } from 'react';
import { SearchButton, SearchForm, SearchbarHeader } from './Searchbar.styled';
import { ReactComponent as SearchIcon } from '../../icon/search.svg';

export class Searchbar extends Component {
  state = {
    value: '',
  };

  handleChange = ({ target: { value } }) => {
    this.setState({ value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.value);
  };

  render() {
    const { value } = this.state;
    return (
      <SearchbarHeader>
        <SearchForm onSubmit={this.handleSubmit}>
          <SearchButton type="submit">
            <SearchIcon className="icon_search" />
          </SearchButton>

          <input
            className="input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.handleChange}
            value={value}
            name="search"
          />
        </SearchForm>
      </SearchbarHeader>
    );
  }
}
