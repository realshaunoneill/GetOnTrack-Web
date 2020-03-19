import React from 'react';
import TransportItem from './TransportItem';

import { DUBLIN_BUS_YELLOW, IRISH_RAIL_GREEN_DARK, LUAS_PURPLE, DUBLIN_BIKES_BLUE } from '../../assets/Colours';

import busIcon from '../../assets/img/bus.svg';
import railIcon from '../../assets/img/rail.svg';
import luasIcon from '../../assets/img/luas.svg';
import bikeIcon from '../../assets/img/bike.svg';

const TransportFooter = () => (
  <div className="transportFooter is-hidden-mobile">
    <span className="footerTitle"><b>CHOOSE </b>TRANSPORT:</span>
    <div className="columns is-centered is-multiline">
      <TransportItem type="Dublin Bus" icon={busIcon} color={DUBLIN_BUS_YELLOW} link="/realtime/dublinbus" isLight={true}/>
      <TransportItem type="Irish Rail" icon={railIcon} link="/realtime/irishrail" color={IRISH_RAIL_GREEN_DARK}/>
      <TransportItem type="Luas" icon={luasIcon} link="/realtime/luas" color={LUAS_PURPLE}/>
      <TransportItem type="Dublin Bikes" icon={bikeIcon} link="/realtime/dublinbikes" color={DUBLIN_BIKES_BLUE} />
    </div>
  </div>
);

export default TransportFooter;
