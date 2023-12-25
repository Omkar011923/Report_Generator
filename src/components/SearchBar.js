import { Button, TextField } from '@mui/material';
import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  return (
    <div className='flex gap-3'>
      <TextField
        size='small'
        label="Search..."
        value={searchTerm}
        onChange={handleInputChange}
        />
      <Button onClick={handleSearch} variant='contained'>Search</Button>
    </div>
  );
};

export default SearchBar;
