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
      <div className="search">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            className="input__search"
            name="searchInput"
            autofocus
          />
        </form>
      </div>
      <div className="render__imgs is-half">
        <CardPhotos props={search_key} />
      </div>
    </div>
  );
};

export default Photos;
