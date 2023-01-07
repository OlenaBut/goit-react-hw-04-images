import { useState } from 'react';
import { FcSearch } from 'react-icons/fc';
import { SearchBarHeader, SearchForm, SearchFormButton, SearchFormInput } from './SearchBar.styled.jsx'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



export function SearchBar( { onSubmit }) {
 const [query, setQuery] = useState('');

  const handleChange = ({ target: { value } }) => {
    setQuery(value);
    console.log(value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (query.trim() === '') {
    return toast('Please, enter query!');
   }
 onSubmit(query);
  
  };

      return (
      <SearchBarHeader>
          <SearchForm onSubmit={handleSubmit}>
          <SearchFormButton type="submit">
            <FcSearch size="2rem" />
          </SearchFormButton>
          <SearchFormInput
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={handleChange}
            value={query}
          />
        </SearchForm>
      </SearchBarHeader>
    );
};