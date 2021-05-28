import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Card from './Card'

const Countries = () => {
  const [data, setData] = useState([])

  const [sortedData, setSortedData] = useState([])

  const [playOnce, setPlayOnce] = useState(true)

  const [rangeValue, setRangeValue] = useState(40)

  const radios = ["Africa", "America" , "Europe" , "Asia" , "Oceania"];

  const [selectedContinent, setSelectedContinent ] = useState("")

  useEffect(() => {
    if (playOnce) {
      axios
        .get(
          'https://restcountries.eu/rest/v2/all?fields=name;population;flag;region;capital'
        )
        .then((res) => {
          setData(res.data);
          setPlayOnce(false);
        })
    }

    

    const sortedCountry = () => {
      const countryObject = Object.keys(data).map((i) => data[i]);
      const sortedArray = countryObject.sort((a, b) => {
        return b.population - a.population
      });
      sortedArray.length = rangeValue;
      setSortedData(sortedArray)
      
    };

    sortedCountry();
  }, [data, rangeValue]);

  return (
    <div className="countries">
      <div classNamesort-container>
        <input type="range" min="1" max="250" value={rangeValue} onChange={(e) => setRangeValue(e.target.value)}></input>
        {radios.map((continent) => {
          return (
            <li key={continent} >
              <input type="radio" value={continent} id={continent} checked={continent === selectedContinent} onChange={(e) => 
                setSelectedContinent(e.target.value)
              }></input>
              <label htmlFor={continent}>{continent}</label>
            </li>
          )
        }
        )}
      </div>
      <div className="cancel">
          {selectedContinent && <h5 onClick={() => setSelectedContinent("")}>Annuler la recherche</h5>}
      </div>
      <ul>
        {sortedData
        .filter((country) => country.region.includes(selectedContinent))
        .map((country) => (
          <Card country={country} key={country.name} />
        ))}
      </ul>
    </div>
  )
}

export default Countries
