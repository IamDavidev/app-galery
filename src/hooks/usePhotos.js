import { useState, useEffect } from 'react';
import getPhotos from '../services/getPhotos';

const usePhotos = ({keyword}={keyword:null}, {page =  '1'}) => {
  const [Photos__img, setPhotos__img] = useState([]);
  useEffect(() => {
    const keyLast = keyword || localStorage.getItem('lastKey') || 'gatos';
    getPhotos({ keyword: keyLast , i:page}).then((i) => setPhotos__img(i.results));
    localStorage.setItem('lastKey', keyword);
  }, [keyword,page]);
  return Photos__img;
};

export default usePhotos;
