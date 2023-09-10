import React, { useState } from 'react';
import { AsyncPaginate } from 'react-select-async-paginate';
import { GEO_API_URL } from '../../api';

const Search = ({ onSearchChange }) => {
  const [search, setSearch] = useState(null);

  const loadOptions = (inputValue)=> {
    return fetch (`${GEO_API_URL}/cities?minPopulation=1000000&namePrefix=${inputValue}`, options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));
  }

  const handleOnChange = (searchData) => {
    setSearch(searchData);
    onSearchChange(searchData);
  };

  return (
    <AsyncPaginate
      placeholder="Search for City"
      debounceTimeout={600}
      value={search} // Using the search state variable here
      onChange={handleOnChange}
      loadOptions={loadOptions}
    />
  );
};

export default Search;
