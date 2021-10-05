import { useState } from 'react';
import '../index.css';
import CardPhotos from './CardPhotos';
const Photos = () => {
  const [search_key, setSearch_key] = useState('');
  const [page, setPage] = useState('');
  const handleSubmit = (evt) => {
    evt.preventDefault();
    const key = evt.target[0].value;
    setSearch_key(key);
  };
  const page1 = () => {
    setPage('1');
  };
  const page2 = () => {
    setPage('2');
  };
  const page3 = () => {
    setPage('3');
  };

  return (
    <div className="photos">
      <div className="search">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            className="input__search"
            name="searchInput"
            autoFocus
          />
        </form>
      </div>
      <div className="pages__api">
        <button onClick={page1}>1</button>
        <button onClick={page2}>2</button>
        <button onClick={page3}>3</button>
      </div>
      <div className="render__imgs is-half">
        <CardPhotos keyword={search_key} page={page} />
      </div>
    </div>
  );
};

export default Photos;
