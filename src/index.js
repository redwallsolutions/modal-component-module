import React, {Component} from 'react';
import { render } from "react-dom";

import DialogComponent from './lib';

class App extends Component {

  state = {
    isVisible: false
  }

  toggleVisibility = () => {
    this.setState({
      isVisible: !this.state.isVisible
    });
  }

  render() {
    return (
      <div style={{height:'99vh',width:'99vw',display: 'flex', justifyContent:'center', alignItems:'center',flexDirection:'column'}}>
        <button onClick={this.toggleVisibility}>Toggle Modal</button>
        <DialogComponent
          visible={this.state.isVisible} onClose={this.toggleVisibility}/>
      </div>
    );
  }

}

render(<App />, document.getElementById("root"));
