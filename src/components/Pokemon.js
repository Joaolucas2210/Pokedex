import { Component } from 'react';
import PropTypes from 'prop-types';

class Pokemon extends Component {
  render() {
    const { pokemon } = this.props;
    const { name, type, averageWeight, image } = pokemon;
    const { value, measurementUnit } = averageWeight;
    return (
      <li>
        <div className="poke-info">
          {' '}
          <h2>{ name }</h2>
          <h3>{ type }</h3>
          <p>

            Average Weight:
            <span>{` ${value} ${measurementUnit}`}</span>
          </p>
        </div>
        <img src={ image } alt={ name } />
      </li>
    );
  }
}
Pokemon.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    averageWeight: PropTypes.shape({
      value: PropTypes.number.isRequired,
      measurementUnit: PropTypes.string.isRequired,
    }).isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
};
export default Pokemon;
