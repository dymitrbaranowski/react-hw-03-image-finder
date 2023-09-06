import propTypes from 'prop-types';
import { Input, SearchBar, SearchBtn, SerchForm } from './Searchbar.styled';

export const Searchbar = ({ onSubmit }) => (
  <SearchBar>
    <SerchForm onSubmit={onSubmit}>
      <SearchBtn type="submit">
        <span>Search</span>
      </SearchBtn>

      <Input
        name="inputForSearch"
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search images and photos"
      />
    </SerchForm>
  </SearchBar>
);

Searchbar.propTypes = {
  onSubmit: propTypes.func,
};