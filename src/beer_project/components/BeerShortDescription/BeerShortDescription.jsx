import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { chooseFunction } from '../../utils';

import './BeerShortDescription.scss';

function BeerShortDescription({
  id,
  className,
  title,
  tagline,
  description,
  image,
  favorite,
  onFavoriteClicked,
  onRemoveFavoriteClicked,
}) {
  const FavoriteButtonTitle = favorite ? 'Remove Favorite' : 'Favorite';

  const favoriteButtonClickHandler = chooseFunction(
    favorite,
    onFavoriteClicked,
    onRemoveFavoriteClicked,
  );

  const onFavoriteButtonClicked = () => favoriteButtonClickHandler(id);

  return (
    <div className={classNames('beer-short-description', className)}>
      <div className="beer-short-description__left-container">
        <p className="beer-short-description__name">{title}</p>
        <p className="beer-short-description__description">{tagline}</p>
        <button
          type="button"
          className="beer-short-description__favorite-button"
          onClick={onFavoriteButtonClicked}
        >
          {FavoriteButtonTitle}
        </button>
        <p className="beer-short-description__text">{description}</p>
      </div>
      <img src={image} className="beer-short-description__image" alt="beer" />
    </div>
  );
}

BeerShortDescription.propTypes = {
  onFavoriteClicked: PropTypes.func.isRequired,
  onRemoveFavoriteClicked: PropTypes.func.isRequired,

  className: PropTypes.string,

  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  tagline: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  favorite: PropTypes.bool.isRequired,
};

BeerShortDescription.defaultProps = {
  className: '',
};

export default BeerShortDescription;
