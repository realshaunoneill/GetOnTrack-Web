import React, {useState, Fragment} from 'react';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCog} from '@fortawesome/free-solid-svg-icons';

import SettingsModal from './SettingsModal';
import {ReducerKeys, useAuth} from '../AuthContext';

const SettingsNavItem = () => {
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [state, dispatch] = useAuth();

  const userLogout = () => {
    dispatch({
      type: ReducerKeys.removeUser, payload: {}
    });
    setIsSettingsOpen(false);
    console.debug('Clearing saved user on Logout', state);
  };

  return (
    <Fragment>
      <div className="navbar-item" title="Settings" onClick={() => setIsSettingsOpen(true)}>
        <FontAwesomeIcon onClick={() => setIsSettingsOpen(true)} icon={faCog}/>
      </div>
      <SettingsModal isActive={isSettingsOpen} closeModal={() => setIsSettingsOpen(false)} logout={userLogout}/>
    </Fragment>
  );
};

export default SettingsNavItem;
