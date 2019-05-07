import React, {Component} from 'react';
import { render } from "react-dom";

import Modal from './lib';

import { createGlobalStyle, ThemeProvider } from 'styled-components';

const ResetCSS = createGlobalStyle`
  body {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
`

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
      <ThemeProvider theme={{mode: 'light'}}>
        <div style={{height:'99vh',width:'99vw',display: 'flex', justifyContent:'center', alignItems:'center',flexDirection:'column'}}>
          <ResetCSS/>
          <button onClick={this.toggleVisibility}>Toggle Modal</button>
          <Modal
            visible={this.state.isVisible} onClose={this.toggleVisibility}/>
        </div>
      </ThemeProvider>
    );
  }

}

render(<App />, document.getElementById("root"));
