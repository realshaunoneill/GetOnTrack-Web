import React, {Fragment} from 'react';

const SettingsItem = ({title, children}) => (
  <Fragment>
    <h1>{title}</h1>
    {children}
    <hr/>
  </Fragment>
);

const SettingsModal = ({isActive, closeModal, logout}) => {

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
            <SettingsItem title="Favourite Stops:">
              <p>Test</p>
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