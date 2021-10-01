import { useEffect, useState } from 'react';
import getPhotos from '../services/getPhotos';

const Photos = () => {
  const [photos__img, getPhotos__img] = useState([]);
  const [search_key , getSearch_key] = useState('')
  useEffect(() => {
    getPhotos().then((img) => getPhotos__img(img));
  }, []);

  const handleSubmit = (evt) =>  evt.preventDefault();
  const handleChange = evt => getSearch_key(evt.target.value)
  return (
    <div className="photos">
      <form onSubmit={handleSubmit}>
        <label>
          search :{' '}
          <input type="text" className="input__sear" name="searchInput"  onchange={handleChange}/>
        </label>
      </form>
      <>
        {photos__img.map((i) => (
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
