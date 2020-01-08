import React from 'react'
import DefaultLayout from "../layouts/default";
import SearchBox from "../components/searchBox/SearchBox";

const Index = () => (
  <DefaultLayout title="Home">
    <SearchBox/>
  </DefaultLayout>
);

export default Index;