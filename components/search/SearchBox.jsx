import React, { useState } from 'react'
import { AutoComplete } from '@bit/primefaces.primereact.autocomplete'
import PrimereactStyle from '@bit/primefaces.primereact.internal.stylelinks'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronCircleRight } from '@fortawesome/free-solid-svg-icons'

const SearchBox = ({ defaultValue, availableOptions = [], changeValue }) => {
  const [filteredOptions, setFilteredOptions] = useState([])
  const [value, setValue] = useState(defaultValue)

  const filterOptions = event => {
    setTimeout(() => {
      if (event.query.length === 0) return setFilteredOptions(...availableOptions)
      setFilteredOptions(availableOptions.filter(opt => (opt.toLowerCase().startsWith(event.query.toLowerCase()))))
    }, 250)
  }

  const getItemTemplate = option => (
    <div>
      <div className='p-clearfix'>
        <img
          alt={option}
          src={`https://raw.githubusercontent.com/primefaces/primereact/master/public/showcase/resources/demo/images/car/${'Audi'}.png`}
          style={{ width: '32px', display: 'inline-block', margin: '5px 0 2px 5px' }}
        />
        <div style={{ fontSize: '18px', float: 'right', margin: '10px 10px 0 0' }}>
          {option}
        </div>
      </div>
    </div>
  )

  return (
    <div className="search">
      <PrimereactStyle/>
      <AutoComplete
        value={value}
        suggestions={filteredOptions}
        completeMethod={filterOptions}
        size={40}
        maxLength={1}
        placeholder='Where would you like to go?'
        itemTemplate={getItemTemplate}
        onChange={e => setValue(e.value)}
        onKeyPress={e => {
          if (e.key === 'Enter') changeValue(value)
        }}
      />
      <div className="searchButton button" onClick={() => changeValue(value)}>
        <FontAwesomeIcon icon={faChevronCircleRight} title="Search"/>
      </div>
    </div>
  )
}

export default SearchBox
