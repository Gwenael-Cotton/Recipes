import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './style.scss';

const Card = ({
  thumbnail,
  title,
  difficulty,
  slug,
}) => (
  <article className="card">
    <img className="card-img" src={thumbnail} alt={title} />
    <div className="card-content">
      <h2 className="card-title">{title}</h2>
      <p className="card-desc">Difficulté : {difficulty}</p>
      <Link to={`/recipe/${slug}`} className="card-link">Voir la recette</Link>
    </div>
  </article>
);

Card.defaultProps = {
  thumbnail: '',
  title: '',
  difficulty: '',
  slug: '',
};

Card.propTypes = {
  thumbnail: PropTypes.string,
  title: PropTypes.string,
  difficulty: PropTypes.string,
  slug: PropTypes.string,
};

export default Card;
