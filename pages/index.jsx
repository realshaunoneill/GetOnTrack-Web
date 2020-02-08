import React from 'react'
import DefaultLayout from "../layouts/default";

const Index = () => (
    <DefaultLayout title="Home">
        <div className="container">
            <div className="columns">
                <div className="column is-half columnInfo">
                    <h1 className="title is-1">
                        <span className="header-title">
                            Welcome to <b>GetOnTrack</b>
                        </span>
                    </h1>
                    <h2 className="header-subtitle">
                        One stop solution to move and commute around Dublin
                    </h2>
                    <div className="fancySearchBox control has-icons-right">
                        <input className="input is-large" type="text" placeholder="Where do you want to go?" />
                        <span className="magnifSearch icon is-medium is-right">
                            <i data-feather="search"/>
                        </span>
                    </div>
                </div>
                <div className="column is-half is-hidden-mobile columnMap">
                    Big Giant Google Maps area thing here
                </div>
            </div>
        </div>
    </DefaultLayout>
);

export default Index;