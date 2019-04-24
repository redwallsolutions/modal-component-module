import styled, {
  createGlobalStyle
} from 'styled-components';
import Poppins from './../assets/fonts/Poppins-Regular.ttf';
import Theming from 'theming-component-module';
import Color from 'color';

export const theme = Theming.createThemeWithAppearance()

const defaultProps = {
  theme: {
    mode: 'light'
  },
  appearance:'primary'
}

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
  }
  .dialog-component-module .rc-dialog-header {
    border-bottom: none !important;
    padding:0 !important;
    margin: 0 !important;
  }
`

const FlexContainer = styled.div `
  display: flex;
  align-items: 'center';
  padding: 0;
  margin: 0;
`

const DialogHeader = styled(FlexContainer)`
  padding: 1.3em;
  background-color: ${props => Color(theme(props).contrast(props)).fade(.05).string()};
  color: ${props => theme(props).color};
  border-radius: 4px 4px 0 0;
`

DialogHeader.defaultProps = defaultProps

export {DialogHeader}

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

const DialogHeaderSubtitle = styled.h2`
  margin: 3px 0 0 0;
  font-size: 14px;
  font-weight: normal;
  letter-spacing: .8px;
  color: ${props => Color(theme(props).color(props)).fade(.3).string()}
`

DialogHeaderSubtitle.defaultProps = defaultProps

export {DialogHeaderSubtitle}
