import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import './style.scss';

const Menu = ({ recipes }) => (
  <nav className="menu">
    <NavLink
      exact
      activeClassName="menu-link--active"
      className="menu-link"
      to="/"
    >
      Accueil
    </NavLink>
    <NavLink
      exact
      activeClassName="menu-link--active"
      className="menu-link"
      to="/favoris"
    >
      Favoris
    </NavLink>
    {recipes.map((recipe) => (
      <NavLink
        exact
        activeClassName="menu-link--active"
        key={recipe.id}
        className="menu-link"
        to={`/recipe/${recipe.slug}`}
      >
        {recipe.title}
      </NavLink>
    ))}
  </nav>
);

Menu.propTypes = {
  recipes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      slug: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default Menu;
