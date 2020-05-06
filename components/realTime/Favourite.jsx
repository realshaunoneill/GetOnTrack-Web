import React from 'react';
import {useRouter} from 'next/router';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faHeart} from '@fortawesome/free-solid-svg-icons';

import {useAuth} from '../AuthContext';

const API_URL = (process.env.NODE_ENV === 'development' ? 'http://localhost:8080' : 'https://api.getontrack.ie');

const Favourite = ({colour}) => {
  const router = useRouter();
  const [state, dispatch] = useAuth();

  return (
    <div
      className="button is-outlined favourite"
      title="Favourite this stop"
      style={{backgroundColor: colour, border: '3px solid white'}}
      onClick={async () => {
        const [transport, stopID] = router.asPath.split('realtime/')[1].split('?stop=');

        const userToken = state && state.userObject.jwtToken;
        if (!userToken) {
          console.log('Unable to save favourite as user is not logged in', transport, stopID);
          return null;
        }

        console.debug('Saving new favourite..', transport, stopID);
        const res = await (await fetch(`${API_URL}/favourite`, {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({token: userToken, transport: transport, stopid: stopID, name: 'Test'})
        })).json();
        console.debug('Saved new favourite:', res);
      }}>
      Favourite
    </div>
  );
};

export default Favourite;
