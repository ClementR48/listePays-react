import React from 'react';

const Card = (props) => {
  
  const { country } = props;
 
  const numberFormat = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  }

  return (
    <div className="card-container">
      <li className="card">
        <img src={ country.flag } alt="flag"></img>
        <div className="data-container">
          <ul>
            <li>{country.name}</li>
            <li>{country.capital}</li>
            <li>{numberFormat(country.population)} hab</li>
          </ul>
        </div>
      </li>
    </div>
  );
};

export default Card;