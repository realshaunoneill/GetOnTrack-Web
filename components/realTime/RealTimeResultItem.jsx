import React from 'react';

const RealTimeResultItem = ({type, number, name, departure, arrival, late}) => (
    <table className="realTimeResultItem table is-fullwidth">
        <thead>
            <tr>
                <th><b>{type} NO</b></th>
                <th><b>{type} NAME</b></th>
                <th><b>DEPARTURE</b></th>
                <th><b>ARRIVAL</b></th>
                <th><b>LATE</b></th>
            </tr>
        </thead>
        <tbody>
            <tr className="has-text-centered">
                <th>{number}</th>
                <th>{name}</th>
                <th>{departure}</th>
                <th>{arrival}</th>
                <th>{late}</th>
            </tr>
        </tbody>
    </table>
);

export default RealTimeResultItem;