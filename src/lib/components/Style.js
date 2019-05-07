import styled, {
  createGlobalStyle
} from 'styled-components';
import Theming from 'theming-component-module';
import Color from 'color';

export const theme = Theming.createThemeWithAppearance()

const defaultProps = {
  theme: {
    mode: 'light'
  },
  appearance:'primary'
}

const DialogGlobalStyles = createGlobalStyle `

  .modal-component-module {
    font-family: Arial, Helvetica, Tahoma, Geneva, sans-serif;
  }

  .rc-dialog-content {
    background: none !important;
  }

  .rc-dialog-header {
    border-bottom: none !important;
    border-radius: 7px 7px 0 0 !important;
    padding:0 !important;
    margin: 0 !important;
    background: linear-gradient(225deg, ${props=> theme(props).contrast}, ${props=> Color(theme(props).contrast(props)).lighten(0.2).string()}) !important;
    color: ${props => theme(props).color} !important;
  }

  .rc-dialog-body {
    border-radius: 0 0 7px 7px !important;
    background-color: ${props => theme(props).contrast} !important;
    color: ${props => theme(props).color};
  }

  .rc-dialog-close {
    opacity: .6 !important;
    filter: none !important;
    color: ${props => props.theme.mode === 'light' ? Color(theme(props).color(props)).grayscale().string() : theme(props).color} !important;
    text-shadow: none !important;
    transition: all .2s !important;
    font-size: 27px !important;
    :hover {
      opacity: 1 !important;
    }
  }

  .rc-dialog-mask {
    background-color: ${props => Color(theme(props).color(props)).fade(.08).darken(.9).string()}
  }
`

DialogGlobalStyles.defaultProps = defaultProps

export {DialogGlobalStyles}

const FlexContainer = styled.div `
  display: flex;
  align-items: 'center';
  padding: 0;
  margin: 0;
`

const DialogHeader = styled(FlexContainer)`
  padding: 1.3em;
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
