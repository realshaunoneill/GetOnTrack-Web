import React from 'react';

import {AuthProvider} from '../components/AuthContext';
import {DataProvider} from '../components/DataContext';

const App = ({Component, pageProps}) => (
  <AuthProvider>
    <DataProvider>
      <Component {...pageProps}/>
    </DataProvider>
  </AuthProvider>
);

export default App;