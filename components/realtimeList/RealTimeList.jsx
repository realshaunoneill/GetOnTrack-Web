import React, { Fragment } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { DUBLIN_BUS_YELLOW, IRISH_RAIL_GREEN, LUAS_PURPLE, DUBLIN_BIKES_BLUE } from '../../assets/Colours';

import { faChevronCircleRight, faChevronCircleLeft } from '@fortawesome/free-solid-svg-icons';

import Bus from '../../assets/img/bus.svg';
import Rail from '../../assets/img/rail.svg';
import Luas from '../../assets/img/luas.svg';
import Bike from '../../assets/img/bike.svg';

const RealTimeItem = ({ type, colour, subtext, icon, link, isRight }) => {
  const style = {backgroundColor: colour, outline: `5px ${colour} solid`};
  if (isRight) style.right = '-20px';
  else style.left = '-20px';

  return (
    <div className="columns has-text-centered realtime-container">
      <Link href={link}>
        <a
          style={style}
          className={`column realtime-item is-two-fifths ${isRight ? 'is-offset-three-fifths' : null}`}>
          <div className="columns is-vcentered is-gapless">
            {isRight ? (
              <Fragment>
                <div className="column is-2">
                  <FontAwesomeIcon icon={faChevronCircleLeft}/>
                </div>
                <div className="column">
                  <b>{type}</b><br/>
                  <p>{subtext}</p>
                </div>
                <div className="column is-3">
                  <img src={icon} alt={type}/>
                </div>
              </Fragment>
            ) : (
              <Fragment>
                <div className="column is-3">
                  <img src={icon} alt={type}/>
                </div>
                <div className="column">
                  <b>{type}</b><br/>
                  <p>{subtext}</p>
                </div>
                <div className="column is-2">
                  <FontAwesomeIcon icon={faChevronCircleRight}/>
                </div>
              </Fragment>
            )}
          </div>
        </a>
      </Link>
    </div>
  );
};

const RealTimeList = () => (
  <div className="realtimeList">
    <span className="footerTitle"><b>REALTIME </b>INFORMATION:</span>
    <div>
      <RealTimeItem type="Dublin Bus" subtext="500 amazing stops near you" colour={DUBLIN_BUS_YELLOW} icon={Bus} link="/realtime/dublinbus" isRight={false}/>
      <RealTimeItem type="Irish Rail" subtext="500 amazing stops near you" colour={IRISH_RAIL_GREEN} icon={Rail} link="/realtime/irishrail" isRight={true}/>
      <RealTimeItem type="Luas" subtext="500 amazing stops near you" colour={LUAS_PURPLE} icon={Luas} link="/realtime/luas" isRight={false}/>
      <RealTimeItem type="Dublin Bikes" subtext="500 amazing stops near you" colour={DUBLIN_BIKES_BLUE} icon={Bike} link="/realtime/dublinbikes" isRight={true}/>
    </div>
  </div>
);

export default RealTimeList;
