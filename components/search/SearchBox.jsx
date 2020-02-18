import React from 'react';

const SearchBox = () => (
    <div className="fancySearchBox control has-icons-right">
        <input className="input is-large" type="text" placeholder="Where do you want to go?"/>
        <span className="magnifSearch icon is-medium is-right">
            <i data-feather="search"/>
        </span>
    </div>
);

export default SearchBox;