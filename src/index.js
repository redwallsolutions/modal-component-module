import React, {Component} from 'react';
import { render } from "react-dom";

import Modal from './lib';

import { createGlobalStyle, ThemeProvider } from 'styled-components';
import useModalController from './lib/components/useModalController';

const ResetCSS = createGlobalStyle`
  body {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
`

class App extends Component {

  onClose = async (closed) => {
    await closed
    console.log("totally closed")
  }
  

  render() {
    return (
      <ThemeProvider theme={{mode: 'dark', primaryContrastDark: '#2b324c', primaryDark: '#ebebeb', secondaryDark: 'rgb(106, 140, 147)', secondaryDarkContrast: 'rgb(238, 238, 238)'}}>
        <div style={{height:'99vh',width:'99vw',display: 'flex', justifyContent:'center', alignItems:'center',flexDirection:'column'}}>
          <ResetCSS/>
          <button>Toggle Modal</button>
          <Modal
            appearance='primary'
            onClose={this.onClose}
            title='Modal Component Module'
            subtitle='A component made for and by Redwall Solutions.'
          >
            <ModalContent/>
          </Modal>
        </div>
      </ThemeProvider>
    );
  }
}

function ModalContent() {
  const modalController = useModalController()

  return (
    <p>Lorem... <button onClick={()=>modalController.close()}>Close by here</button></p>
  )
}

render(<App />, document.getElementById("root"));
