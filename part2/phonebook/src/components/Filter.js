import React from 'react'

const Filter = (props) => {
    const handleSearchPerson = props.handleSearchPerson
    const searchPersons = props.searchPersons
    return (
      <div>
        filter shown with <input onChange={handleSearchPerson} value={searchPersons} />
      </div>
    )
  };

  export default Filter