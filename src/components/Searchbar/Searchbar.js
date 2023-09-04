import propTypes from 'prop-types';

export const Searchbar = ({ onSubmit }) => (
  <header>
    <form onSubmit={onSubmit}>
      <button type="submit">
        <span>Search</span>
      </button>

      <input
        name="inputForSearch"
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search images and photos"
      />
    </form>
  </header>
);

Searchbar.propTypes = {
  onSubmit: propTypes.func,
};