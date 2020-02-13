import React from 'react'
import DefaultLayout from "../layouts/default";
import GoogleMap from '../components/map/GoogleMap';
import TransportFooter from "../components/transportFooter/TransportFooter";

const Index = () => (
    <DefaultLayout title="Home">
        <div className="columns">
            <div className="column columnInfo">
                <h1 className="title is-1">
                        <span className="header-title">
                            Welcome to <br/><b>GetOnTrack</b>
                        </span>
                </h1>
                <h2 className="is-4 subtitle">
                    Your one stop solution to move and commute around Dublin
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
            <TransportFooter/>
        </div>
        <div className="is-hidden-desktop">

        </div>
    </DefaultLayout>
);

export default Index;