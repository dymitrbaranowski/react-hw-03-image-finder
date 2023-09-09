import { Component } from 'react';
import PropTypes from 'prop-types';
import {
  HeaderSearchBar,
  Input,
  SearchBtn,
  SearchForm,
  SearchSpan,
} from './Searchbar.styled';

// export const Searchbar = ({ onSubmit }) => (
//   <SearchBar>
//     <SerchForm onSubmit={onSubmit}>
//       <SearchBtn type="submit">
//         <span>Search</span>
//       </SearchBtn>

//       <Input
//         name="inputForSearch"
//         type="text"
//         autoComplete="off"
//         autoFocus
//         placeholder="Search images and photos"
//       />
//     </SerchForm>
//   </SearchBar>
// );

// Searchbar.propTypes = {
//   onSubmit: propTypes.func,
// };

class SearchBar extends Component {
  state = {
    seachName: '',
    inputValue: '',
  };
  handleChange = event => {
    this.setState({ inputValue: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const searchQuery = event.target.elements.searchName.value.trim();
    this.props.onSubmit(searchQuery);
    event.target.reset();
  };

  render() {
    return (
      <HeaderSearchBar>
        <SearchForm onSubmit={this.handleSubmit}>
          <SearchBtn>
            <SearchSpan>Search</SearchSpan>
          </SearchBtn>
          <Input
            name="searchName"
            type="text"
            id="search"
            value={this.state.inputValue}
            onChange={this.handleChange}
          />
        </SearchForm>
      </HeaderSearchBar>
    );
  }
}

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default SearchBar;
