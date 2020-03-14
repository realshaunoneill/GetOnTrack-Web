import React, {useState} from 'react';
import {AutoComplete} from '@bit/primefaces.primereact.autocomplete';
import PrimereactStyle from '@bit/primefaces.primereact.internal.stylelinks';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronCircleRight} from "@fortawesome/free-solid-svg-icons";

const SearchBox = ({availableOptions = [], changeValue}) => {
    const [filteredOptions, setFilteredOptions] = useState([]);
    const [value, setValue] = useState("");

    const filterOptions = event => {
        setTimeout(() => {
            if (event.query.length === 0) return setFilteredOptions(...availableOptions);
            setFilteredOptions(availableOptions.filter(opt => (opt.toLowerCase().startsWith(event.query.toLowerCase()))))
        }, 250);
    };

    const getItemTemplate = option => (
        <div>
            <div className="itemText">
                {option}
            </div>
        </div>
    );

    return (
        <div className="search">
            <PrimereactStyle/>
            <AutoComplete
                value={value}
                suggestions={filteredOptions}
                completeMethod={filterOptions}
                size={40}
                minLength={1}
                placeholder='Where would you like to go?'
                itemTemplate={getItemTemplate}
                onChange={e => setValue(e.value)}
            />
            <div className="searchButton button is-info" onClick={() => changeValue(value)}>
                <FontAwesomeIcon icon={faChevronCircleRight} title="Search"/>
            </div>
        </div>
    );
};

export default SearchBox;