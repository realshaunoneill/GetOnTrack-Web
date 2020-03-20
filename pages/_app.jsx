import React from 'react';

import {AuthProvider} from '../components/AuthContext';

const App = ({Component, pageProps}) => (

  <AuthProvider>
    <Component {...pageProps}/>
  </AuthProvider>
);

export default App;