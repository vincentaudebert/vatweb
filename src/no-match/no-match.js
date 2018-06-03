import React from 'react';
import './no-match.css';

const NoMatch = () => (
  <div className="no-match__body">
    <div className="container mt">
      <span className="no-match__neg">ERROR 404</span>
      <p className="left no-match__text">
        The page is missing or never was written. You can wait and<br />
        see if it becomes available again, or you can restart your computer.
      </p>
      <p className="left no-match__text">
        * Send us an e-mail to notify this and try it later.<br />
        * Press CTRL+ALT+DEL to restart your computer. You will<br />
        &nbsp; lose unsaved information in any programs that are running.
      </p>
      <p className="left no-match__text">
        Press any link to continue <span className="blink">_</span>
      </p>
      <div className="no-match__menu">
        <a href="/">Go back Home</a> -{' '}
        <a href="mailto:vincent_at_vatweb.fr">Send an email</a>
      </div>
    </div>
  </div>
);

export default NoMatch;
