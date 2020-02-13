import React from 'react';
import TransportItem from "./TransportItem";

import busIcon from "../../assets/img/bus.svg";
import railIcon from "../../assets/img/rail.svg";
import luasIcon from "../../assets/img/luas.svg";
import bikeIcon from "../../assets/img/bike.svg";

const TransportFooter = () => (
    <div className="transportFooter is-hidden-mobile">
        <span className="footerTitle"><b>CHOOSE </b>TRANSPORT:</span>
        <div className="columns is-centered is-multiline">
            <TransportItem type="Dublin Bus" icon={busIcon} color="#FFCC01" isLight={true}/>
            <TransportItem type="Irish Rail" icon={railIcon} color="#00713D"/>
            <TransportItem type="Luas" icon={luasIcon} color="#542F92"/>
            <TransportItem type="Dublin Bikes" icon={bikeIcon} color="#114D57"/>
        </div>
    </div>
);

export default TransportFooter;