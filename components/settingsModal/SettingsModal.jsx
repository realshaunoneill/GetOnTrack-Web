import React, {Fragment, useState, useEffect} from 'react';
import {useAuth} from "../AuthContext";
import Link from "next/link";

const API_URL = (process.env.NODE_ENV === 'development' ? 'http://localhost:8080' : 'https://api.getontrack.ie');

const SettingsItem = ({title, children}) => (
  <div className="box">
    <h1>{title}</h1>
    {children}
    <hr/>
  </div>
);

const SettingsModal = ({isActive, closeModal, logout}) => {

  const [state, dispatch] = useAuth();
  const [favourites, setFavourites] = useState({});

  useEffect(() => {
    loadFavourites();
  }, [setFavourites])

  const loadFavourites = async () => {

    const userToken = state && state.userObject.jwtToken;
    const res = await (await fetch(`${API_URL}/favourite?token=${userToken}`)).json();
    console.debug(res);
    setFavourites(res);
  }

  return (
    <div className={`modal ${isActive ? 'is-active' : null}`}>
      <div className="modal-background" onClick={closeModal}/>
      <div className="settingsModal modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title">User Settings</p>
          <button className="delete" aria-label="close" onClick={closeModal}/>
        </header>
        <section className="modal-card-body">
          <div className="content">
            <SettingsItem title="Bus Favourites">
              {
                (favourites && favourites.busFavourites) ? favourites.busFavourites.map(item => (
                  <Fragment>
                    <Link href={`/realtime/dublinbus?stop=${item.stopID}`}>{item.stopID}</Link><br/><br/>
                  </Fragment>
                )) : []
              }
            </SettingsItem>
            <SettingsItem title="Rail Favourites">
              {
                (favourites && favourites.railFavourites) ? favourites.railFavourites.map(item => (
                  <Link href={`/realtime/irishrail?stop=${item.stopID}`}>{item.stopID}</Link>
                )) : []
              }
            </SettingsItem>
            <SettingsItem title="Luas Favourites">
              {
                (favourites && favourites.luasFavourites) ? favourites.luasFavourites.map(item => (
                  <Link href={`/realtime/dublinbus?stop=${item.stopID}`}>{item.stopID}</Link>
                )) : []
              }
            </SettingsItem>
            <SettingsItem title="Bike Favourites">
              {
                (favourites && favourites.bikeFavourites) ? favourites.bikeFavourites.map(item => (
                  <Link href={`/realtime/dublinbikes?stop=${item.stopID}`}>{item.stopID}</Link>
                )) : []
              }
            </SettingsItem>
          </div>
        </section>
        <footer className="modal-card-foot">
          <button className="button is-success">Save changes</button>
          <button className="button">Cancel</button>
          <button className="button is-danger" onClick={logout}>Logout</button>
        </footer>
      </div>
    </div>
  );
};

export default SettingsModal;