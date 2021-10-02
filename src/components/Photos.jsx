import { useState } from 'react';
import '../index.css';
import CardPhotos from './CardPhotos';
const Photos = () => {
  const [search_key, setSearch_key] = useState('');
  const handleSubmit = (evt) => {
    evt.preventDefault();
    const key = evt.target[0].value;
    setSearch_key(key);
  };
  return (
    <div className="photos">
      <form onSubmit={handleSubmit}>
        <label>
          search :{' '}
          <input type="text" className="input__search" name="searchInput" />
        </label>
      </form>
      <CardPhotos props={search_key} />
     </div>
  );
};

export default Photos;
