import styled, {
  createGlobalStyle
} from 'styled-components';

import Poppins from './../assets/fonts/Poppins-Regular.ttf';

export const DialogGlobalStyles = createGlobalStyle `
  @font-face {
    font-family: Poppins;
    src: url(${Poppins}) format("TrueType");
    font-style: light;
    font-weight: 200;
    font-display: fallback;
  }

  .dialog-component-module {
    font-family: 'Poppins', cursive;
    color: rgb(69,69,69);
  }
  .rc-dialog-header {
    border-bottom: none;
    padding:0;
    margin: 0;
  }
`

const FlexContainer = styled.div `
  display: flex;
  align-items: 'center';
  padding: 0;
  margin: 0;
`

export const DialogHeader = styled(FlexContainer)`
  padding: 1.3em;
`

export const DialogHeaderIcon = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 100px;
  padding: 0 15px;
`

export const DialogHeaderTitleContainer = styled(FlexContainer)`
  flex-direction: column;
`

export const DialogHeaderTitle = styled.h1`
  font-weight: bolder;
  font-size: 18px;
  margin: 0;
`

export const DialogHeaderSubtitle = styled.h2`
  margin: 3px 0 0 0;
  font-size: 14px;
  color: rgb(120,120,120);
  font-weight: normal;
  letter-spacing: .8px;
`
