import usePhotos from '../hooks/usePhotos';
const CardPhotos = ({ props }) => {
  const card__Images = usePhotos({ keyword: props });

  return (
    <>
      {card__Images.map((i) => (
        <div className="card card__img" key={i.id}>
          <div className="card-image">
            <figure className="image is-4by3">
              <img src={i.urls.small} alt={i.alt_description} />
            </figure>
          </div>
          <div className="card-content">
            <div className="media">
              <div className="media-left">
                <figure className="image is-30x30">
                  <img src={i.user.profile_image.large} alt={i.user.id} />
                </figure>
              </div>
              <br />
              <a
                href={i.user.links.html}
                target="_blank"
                rel="noopener noreferrer"
                className="title is-4"
              >
                {i.user.username}{' '}
              </a>
            </div>
          </div>

          <div className="card">
            <footer className="card-footer">
              <a href={i.links.download} className="card-footer-item">
                view
              </a>
              <a href={i.links.download_location} className="card-footer-item">
                ._.
              </a>
              <a href={i.links.self} className="card-footer-item">
                error
              </a>
            </footer>
          </div>
        </div>
      ))}
    </>
  );
};

export default CardPhotos;
