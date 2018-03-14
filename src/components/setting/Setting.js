import React from 'react';
import { connect } from 'react-redux';

import SettingBar from './SettingBar.js'
import ChangeSizeContainer from '../../containers/ChangeSizeContainer.js';
import ItemsContainer from '../../containers/items/ItemsContainer.js';
import AddElementContainer from '../../containers/AddElementContainer.js';
import ClearTable from './ClearTable.js';
import ImportArrayContainer from '../../containers/ImportArrayContainer.js';


class Setting extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      className: "o-setting"
    }
  }

  onCloseClick = () => {
    this.setState({ className: "o-setting o-setting--closed" })
    setTimeout(() => (
      this.setState({ className: "o-setting" })
    ), 350)
  }

  render() {
    return (
      <div className={this.state.className}>

        <SettingBar onCloseClick={this.onCloseClick} />
        <ImportArrayContainer items={this.props.items} />
        <ClearTable defaultElement={this.props.defaultElement} />
        <ChangeSizeContainer defaultElement={this.props.defaultElement} />
        <ItemsContainer />
        <AddElementContainer />

      </div>
    )
  }
}


const mapStateToProps = state => (
  {
    defaultElement: state.items[0].element
  }
)

export default connect(mapStateToProps)(Setting);
