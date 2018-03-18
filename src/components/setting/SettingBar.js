import React from 'react';
import { Link } from 'react-router-dom';
import DelayLink from '../DelayLink.js'

const SettingBar = ({ onCloseClick }) => (
  <ul className="o-setting-bar">

    <li className="o-setting-ico">
      <i className="fas fa-cog" />
    </li>

    <li className="o-setting-name">
      <h1> Setting </h1>
    </li>

    <li className="o-setting-back" onClick={onCloseClick}>
      <DelayLink to={process.env.PUBLIC_URL + "/"} delay={360}>
        <i className="fas fa-angle-right" />
      </DelayLink>
    </li>
  </ul>
)

export default SettingBar;
