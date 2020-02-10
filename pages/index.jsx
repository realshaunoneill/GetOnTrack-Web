import React from 'react'
import DefaultLayout from "../layouts/default";
import TransportItem from "../components/TransportItem";
import GoogleMap from '../components/map/GoogleMap';

// Import Icons here for now, will move to component later
import busIcon from '../assets/img/bus.svg';
import railIcon from '../assets/img/rail.svg';
import luasIcon from '../assets/img/luas.svg';
import bikeIcon from '../assets/img/bike.svg';

const Index = () => (
    <DefaultLayout title="Home">
        <div className="columns">
            <div className="column columnInfo">
                <h1 className="title is-1">
                        <span className="header-title">
                            Welcome to <b>GetOnTrack</b>
                        </span>
                </h1>
                <h2 className="header-subtitle">
                    One stop solution to move and commute around Dublin
                </h2>
                <div className="fancySearchBox control has-icons-right">
                    <input className="input is-large" type="text" placeholder="Where do you want to go?"/>
                    <span className="magnifSearch icon is-medium is-right">
                        <i data-feather="search"/>
                    </span>
                </div>
            </div>
            <div className="column is-three-fifths is-hidden-mobile columnMap">
                <GoogleMap/>
            </div>

            <div className="transportFooter is-hidden-mobile">
                <b>CHOOSE TRANSPORT</b>
                <div className="columns is-centered">
                    <TransportItem type="Dublin Bus" icon={busIcon} color="#FFCC01"/>
                    <TransportItem type="Irish Rail" icon={railIcon} color="#00713D"/>
                    <TransportItem type="Luas" icon={luasIcon} color="#542F92"/>
                    <TransportItem type="Dublin Bikes" icon={bikeIcon} color="#114D57"/>
                </div>
            </div>
        </div>
    </DefaultLayout>
);

export default Index;