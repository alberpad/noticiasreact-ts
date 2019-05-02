import React from "react";

interface INewProps {
  _new: any;
}
const New = (props: INewProps) => {
  const { url, urlToImage, title, description, source } = props._new;
  const img = urlToImage ? (
    <div className="card-image">
      <img src={urlToImage} alt={title} />
      <span className="card-title">{source.name}</span>
    </div>
  ) : (
    ""
  );
  return (
    <div className="col s12 m6 l4">
      <div className="card">
        {img}
        <div className="card-content">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
        <div className="card-action">
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="waves-effects waves-light btn"
          >
            Leer
          </a>
        </div>
      </div>
    </div>
  );
};

export default New;
