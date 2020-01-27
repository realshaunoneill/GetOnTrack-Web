import React from "react";
import "./style.scss";

const SearchBox = () => (
    <div className="fancySearchBox control has-icons-right">
        <input className="input is-large" type="text" placeholder="Where do you want to go?" />
        <span className="magnifSearch icon is-medium is-right">
            <i data-feather="search"></i>
        </span>
    </div>
);

export default SearchBox;