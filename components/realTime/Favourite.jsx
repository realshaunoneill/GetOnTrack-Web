import React from 'react';
import {useRouter} from 'next/router';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faHeart} from '@fortawesome/free-solid-svg-icons';

import {useAuth} from '../AuthContext';

const Favourite = ({colour}) => {
  const router = useRouter();
  const [state, dispatch] = useAuth();

  return (
    <div
      className="button is-outlined favourite"
      title="Favourite this stop"
      style={{backgroundColor: colour, border: '3px solid white'}}
      onClick={() => {
        const [transport, stopID] = router.asPath.split('realtime/')[1].split('?stop=');

        const userToken = state && state.userObject.token;
        if (!userToken) return console.log('Unable to save favourite as user is not logged in', transport, stopID);

        console.debug('Saving new favourite..', transport, stopID);
      }}>
      <FontAwesomeIcon icon={faHeart}/>
    </div>
  );
};

export default Favourite;
