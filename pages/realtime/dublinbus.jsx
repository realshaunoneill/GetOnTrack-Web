import React from 'react'
import DefaultLayout from "../../layouts/default";
import RealTime from "../../components/realTime/RealTime";

import busIcon from "../../assets/img/bus.svg";

const DublinBus = () => (
    <DefaultLayout title="Search Results">
        <RealTime type="Dublin Bus" colour={"#FFCC01"} icon={busIcon}/>
    </DefaultLayout>
);

export default DublinBus;