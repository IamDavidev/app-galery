import { useState, useEffect } from 'react';
import getPhotos from '../services/getPhotos';

const usePhotos = ({keyword}={keyword:null}) => {
  const [Photos__img, setPhotos__img] = useState([]);
  useEffect(() => {
    const keyLast = keyword || localStorage.getItem('lastKey') || 'gatos';
    getPhotos({ keyword: keyLast }).then((i) => setPhotos__img(i.results));
    localStorage.setItem('lastKey', keyword);
  }, [keyword]);
  return Photos__img;
};

export default usePhotos;
