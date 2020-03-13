import React, {useState} from 'react';
import {AutoComplete} from '@bit/primefaces.primereact.autocomplete';
import PrimereactStyle from '@bit/primefaces.primereact.internal.stylelinks';

const SearchBox = () => {
    const [filteredBrands, setFilteredBrands] = useState([]);
    const [value, setValue] = useState("");
    const brands = ['Audi', 'BMW', 'Fiat', 'Ford', 'Honda', 'Jaguar', 'Mercedes', 'Renault', 'Volvo'];

    function filterBrands(event) {
        setTimeout(() => {
            let results;

            if (event.query.length === 0) {
                results = [...brands];
            } else {
                results = brands.filter(brand => {
                    return brand.toLowerCase().startsWith(event.query.toLowerCase());
                });
            }

            setFilteredBrands(results);
        }, 250);
    }

    function itemTemplate(brand) {
        return (
            <div className='p-clearfix'>
                <img
                    alt={brand}
                    src={`https://raw.githubusercontent.com/primefaces/primereact/master/public/showcase/resources/demo/images/car/${brand}.png`}
                    style={{width: '32px', display: 'inline-block', margin: '5px 0 2px 5px'}}
                />
                <div style={{fontSize: '18px', float: 'right', margin: '10px 10px 0 0'}}>
                    {brand}
                </div>
            </div>
        );
    }

    return (
        <div className="search">
            <PrimereactStyle/>
            <AutoComplete
                value={value}
                suggestions={filteredBrands}
                completeMethod={filterBrands}
                size={40}
                minLength={1}
                placeholder='Where would you like to go'
                itemTemplate={itemTemplate}
                onChange={e => setValue(e.value)}
            />

        </div>
    );
}

export default SearchBox;