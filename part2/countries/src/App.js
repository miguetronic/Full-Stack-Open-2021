import React, { useState, useEffect } from 'react'
import axios from 'axios'

const CountryDetails = (props) => {
  const country = props.country
  return (
    <div>
      <h2 >{country.name.official}</h2>
      <p>capital {country.capital}</p>
      <p>population {country.population}</p>
      <h3>languages</h3>
      <ul> {Object.values(country.languages).map(language => <li key={language}>{language}</li>)} </ul>
      <img alt={country.name.official} src={country.flags.png}></img>
    </div>
  )
};

const DisplayCountry = (props) => {
  const countryToShow = props.countryToShow
  const searchCountry = props.searchCountry

  if (searchCountry === "") {
    //    props.handleShowCountry("")
    return (
      <div></div>
    )
  }

  if (countryToShow.length === 1) {
    //   props.handleShowCountry("")
    return (
      <div>
        {countryToShow.map(country => {
          return (
            <CountryDetails key={country.name.official} country={country} />
          )
        }
        )}
      </div>
    )
  }

  else if (countryToShow.length > 10) {
    //  props.handleShowCountry("")
    return (
      <div>
        <p>Too many matches, specify another filter</p>
      </div>
    )
  }

  else if (countryToShow.length > 1 && countryToShow.length < 10) {
    return (
      <div>
        {countryToShow.map(country => {
          return (
            <div key={country.name.official}>
              {country.name.official}
              <button onClick={() => props.handleShowCountry(country.name.official)}>
                show
              </button>
              {
                (props.showCountry === country.name.official) ? (
                  <CountryDetails key={country.name.official} country={country} />
                ) : <></>
              }
            </div >
          )
        }
        )
        }

      </div >

    )

  }

  return (
    <div>
      hola
    </div>
  )
};

const App = () => {
  const [countries, setCountries] = useState([])
  const [searchCountry, setSearchCountry] = useState("")
  const [showCountry, setShowCountry] = useState("")

  useEffect(() => {
    //console.log('effect')
    axios.get('https://restcountries.com/v3.1/all')
      .then(response => {
        //console.log('promise fulfilled')
        setCountries(response.data)
      })
  }, [])

  const handleSearchCountry = (event) => {
    //console.log(event.target.value)
    setSearchCountry(event.target.value)
  }
  const handleShowCountry = (event) => {
    //console.log('event is:', event)
    setShowCountry(event);
  }


  let countryToShow = countries.filter(country => country.name.official.toLowerCase().includes(searchCountry))

  return (
    <div>
      find countries
      <input value={searchCountry} onChange={handleSearchCountry}></input>
      <div>
        <DisplayCountry countryToShow={countryToShow} searchCountry={searchCountry} handleShowCountry={handleShowCountry} showCountry={showCountry} />

      </div>
    </div>

  )
}

export default App;
