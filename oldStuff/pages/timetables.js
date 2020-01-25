import React from 'react'
import NoHeaderLayout from "../layouts/noheader";
import Timetables from "../components/timetables/Timetables";

const Index = () => (
    <NoHeaderLayout title="Tables">
        <Timetables/>
    </NoHeaderLayout>
);

export default Index;