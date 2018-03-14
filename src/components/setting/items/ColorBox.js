import React from 'react';
import { TwitterPicker } from 'react-color';


const colors = ['#FF6900', '#FCB900', '#00D084',
 '#0693E3', '#ABB8C3', '#EB144C', '#F78DA7', '#9900EF'];

class ColorBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pickerShown: false
    }
  }

  handleChangeComplete = (color) => {
    this.props.changeColor(color.hex);
  }

  onClick = (e) => {
    e.preventDefault();
    this.setState({ pickerShown: !this.state.pickerShown })
  }

  render() {
    return(
      <div>
        <div
          onClick={this.onClick}
          className="c-color-box"
          style={{ backgroundColor: this.props.color }}
        >
          <i className="fas fa-eye-dropper" />
        </div>

        <div className="c-picker">
          {
            this.state.pickerShown
              ? <TwitterPicker
                  color={ this.props.color }
                  onChangeComplete={ this.handleChangeComplete }
                  width="170px"
                  colors={colors}
                />
                : null
          }
        </div>
      </div>
    )
  }
}

export default ColorBox;
