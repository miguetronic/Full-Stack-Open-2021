import React, { useState, useEffect } from 'react'
import axios from 'axios'

const DisplayCountry = (props) => {
  console.log("Countries to show are:", props)
  if (props.countryToShow.length === 0) {
    return (
      <div>{props.userMessage}</div>
    )
  }
  if (props.countryToShow.length === 1) {
    return (
      <div>
        {props.countryToShow.map(country => {
          return (
            <div key={country.name.official}>
              <h2 >{country.name.official}</h2>
              <p>capital {country.capital}</p>
              <p>population {country.population}</p>
              <h3>languages</h3>
              {Object.values(country.languages).map(language => <ul><li>{language}</li></ul>)}
              <img alt={country.name.official} src={country.flags.png}></img>

            </div>
          )
        }
        )}
      </div>
    )
  }
  return (
    <div>
      {props.countryToShow.map(country => <p key={country.name.official}>{country.name.official}</p>)}
    </div>
  )
};

const App = () => {
  const [countries, setCountries] = useState([])
  const [searchCountry, setSearchCountry] = useState("")

  useEffect(() => {
    //console.log('effect')
    axios.get('https://restcountries.com/v3.1/all')
      .then(response => {
        //console.log('promise fulfilled')
        //console.log(response.data)
        setCountries(response.data)
      })
  }, [])

  const handleSearchCountry = (event) => {
    console.log(event.target.value)
    setSearchCountry(event.target.value)
  }

  let countryToShow = []
  let userMessage = ""
  const countriesList = countries.filter(country => country.name.official.toLowerCase().includes(searchCountry))

  if (searchCountry === "") {
    countryToShow = []
  } else if (countriesList.length > 10) {
    countryToShow = []
    userMessage = "Too many matches, specify another filter"
  } else if (countriesList.length > 1) {
    countryToShow = countriesList
  } else {
    countryToShow = countriesList
    //console.log(countryToShow.length)
  }


  //console.log(countryToShow = countries.filter(country => country.name.official.toLowerCase().includes(searchCountry)))

  return (
    <div>
      find countries
      <input value={searchCountry} onChange={handleSearchCountry}></input>
      <div>
        <DisplayCountry countryToShow={countryToShow} userMessage={userMessage} />

      </div>
    </div>

  )
}

export default App;
