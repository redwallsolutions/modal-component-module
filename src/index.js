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

  open = () => {
    this.modalController.open()
  }

  close = () => {
    this.modalController.close()
  }

  onClose = (closed) => {
    closed.then(()=>setTimeout(()=>{this.open()}))
  }

  getModalController = (modalController) => {
    this.modalController = modalController
  }


  render() {
    return (
      <ThemeProvider theme={{mode: 'light'}}>
        <div style={{height:'99vh',width:'99vw',display: 'flex', justifyContent:'center', alignItems:'center',flexDirection:'column'}}>
          <ResetCSS/>
          <button onClick={this.open}>Toggle Modal</button>
          <Modal
            getModalController={this.getModalController}
            onClose={this.onClose}
            closeClick={this.close}
            title='Modal Component Module'
            subtitle='A component made for and by Redwall Solutions.'
          >
            oi
          </Modal>
        </div>
      </ThemeProvider>
    );
  }

}

render(<App />, document.getElementById("root"));
