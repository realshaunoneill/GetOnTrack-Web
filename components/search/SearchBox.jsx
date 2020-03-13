import React, {useState} from 'react';
import {AutoComplete} from '@bit/primefaces.primereact.autocomplete';
import PrimereactStyle from '@bit/primefaces.primereact.internal.stylelinks';

const SearchBox = ({availableOptions= ['Audi', 'BMW', 'Fiat', 'Ford', 'Honda', 'Jaguar', 'Mercedes', 'Renault', 'Volvo']}) => {
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
            <img
                className="itemImage"
                alt={option}
                src={`https://raw.githubusercontent.com/primefaces/primereact/master/public/showcase/resources/demo/images/car/${option}.png`}
            />
            <div className="itemText" >
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
        </div>
    );
};

export default SearchBox;