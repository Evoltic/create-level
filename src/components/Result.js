import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { CopyToClipboard } from 'react-copy-to-clipboard';

import DelayLink from './DelayLink';

class Result extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      className: "o-result"
    }
    this.jsonArray = JSON.stringify(this.props.array);
  }

  onCloseClick = () => {
    this.setState({ className: "o-result o-result--closed" })
    setTimeout(() => (
      this.setState({ className: "o-result" })
    ), 250)
  }

  render() {
    return (
      <div className={this.state.className}>
        <textarea
          readOnly
          value={this.jsonArray}
          name="text"
        />

        <ul className="o-result-bar">
          <li className="c-copy">
            <CopyToClipboard text={this.jsonArray}>
              <h3> Copy </h3>
            </CopyToClipboard>
          </li>

          <li onClick={this.onCloseClick}>
            <DelayLink to={process.env.PUBLIC_URL + "/"} delay={270}>
              <h3 className="c-close"> Close </h3>
            </DelayLink>
          </li>
        </ul>
      </div>
    )
  }
}


const mapStateToProps = (state) => {
  return {
    array: state.array
  }
}

export default connect(mapStateToProps)(Result)
