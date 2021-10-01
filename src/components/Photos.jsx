import { useState } from 'react';
import usePhotos from '../hooks/usePhotos';
const Photos = () => {
  const [search_key, setSearch_key] = useState('');
  const card__Images = usePhotos({ keyword: search_key });

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
          <input type="text" className="input__sear" name="searchInput" />
        </label>
      </form>
      <>
        {card__Images.map((i) => (
          <img key={i.id} src={i.urls.small} alt={i.title} />
        ))}
      </>
    </div>
  );
};

export default Photos;
