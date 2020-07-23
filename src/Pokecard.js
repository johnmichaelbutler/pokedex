import React, {Component} from 'react';
import './Pokecard.css';

class Pokecard extends Component {
  render() {
    const { id, name, type, exp } = this.props;
    return (
      <div key={id} className='Pokecard'>
        <h1>{name}</h1>
        <img className="Pokecard-img" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`} alt="Pokemon"/>
        <p>Type: {type}</p>
        <p>Experience: {exp}</p>

      </div>
    )
  }
};

export default Pokecard;