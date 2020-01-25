import React from 'react'
import Head from 'next/dist/next-server/lib/head'

const Meta = ({title}) => (
  <Head>
    <title>{title} ❯ Transport Ireland+</title>
    <link rel="icon" href="/favicon.ico" />
  </Head>
);

export default Meta;
