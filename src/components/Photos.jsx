import { useState } from 'react';
import usePhotos from '../hooks/usePhotos';
const Photos = () => {
  const [search_key, getSearch_key] = useState('');
  const card__Images = usePhotos({ keyword: search_key });
  const handleSubmit = (evt) => evt.preventDefault();
  const handleChange = (evt) => getSearch_key(evt.target.value);
  console.log(card__Images)
  return (
    <div className="photos">
      <form onSubmit={handleSubmit}>
        <label>
          search :{' '}
          <input
            type="text"
            className="input__sear"
            name="searchInput"
            onChange={handleChange}
          />
          {search_key}
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

/* useEffect(() => {
    const keyLocalLast = keyword || localStorage.getItem("LastKey") || "Gatitos";
    GetGifs({ search: keyLocalLast }).then((gifs) => setGifs(gifs));
    localStorage.setItem("LastKey", keyword);
  }, [keyword]);
  return gifs;
}; */
