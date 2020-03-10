import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";

function _templateObject7() {
  const data = _taggedTemplateLiteral(["\n\tmargin: 3px 0 0 0;\n\tfont-size: 14px;\n\tfont-weight: normal;\n\tletter-spacing: 0.8px;\n\tcolor: ", ";\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  const data = _taggedTemplateLiteral(["\n\tfont-weight: bolder;\n\tfont-size: 18px;\n\tmargin: 0;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  const data = _taggedTemplateLiteral(["\n\tflex-direction: column;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  const data = _taggedTemplateLiteral(["\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\tmax-width: 100px;\n\tpadding: 0 15px;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  const data = _taggedTemplateLiteral(["\n\tpadding: 1.3em;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  const data = _taggedTemplateLiteral(["\n\tdisplay: flex;\n\talign-items: 'center';\n\tpadding: 0;\n\tmargin: 0;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  const data = _taggedTemplateLiteral(["\n\n  .modal-component-module {\n    font-family: Arial, Helvetica, Tahoma, Geneva, sans-serif;\n    animation-duration: .8s !important;\n\n    &.rc-dialog-zoom-leave {\n      animation-duration: .3s !important;\n    }\n  }\n\n  .rc-dialog-fade-leave {\n    animation-duration: .5s !important;\n  } \n\n  .rc-dialog-content {\n    background: none !important;\n  }\n\n  .rc-dialog-header {\n    border-bottom: none !important;\n    border-radius: 7px 7px 0 0 !important;\n    padding:0 !important;\n    margin: 0 !important;\n    background: linear-gradient(225deg, ", ", ", ") !important;\n    color: ", " !important;\n  }\n\n  .rc-dialog-body {\n    border-radius: 0 0 7px 7px !important;\n    background-color: ", " !important;\n    color: ", ";\n  }\n\n  .rc-dialog-close {\n    opacity: .6 !important;\n    filter: none !important;\n    color: ", " !important;\n    text-shadow: none !important;\n    transition: all .2s !important;\n    font-size: 27px !important;\n    :hover {\n      opacity: 1 !important;\n    }\n  }\n\n  .rc-dialog-mask {\n    background-color: ", " !important;\n  }\n\n  @keyframes rcDialogZoomIn {\n    0% {\n      opacity: 0;\n      transform: scale(0.6);\n    } 100% {\n      opacity: 1;\n      transform: scale(1);\n    }\n  }\n  @keyframes rcDialogZoomOut {\n    0% {\n      opacity: 1;\n      transform: scale(1);\n    } 100% {\n      opacity: 0;\n      transform: scale(.6);\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

import styled, { createGlobalStyle } from 'styled-components';
import { createThemeWithAppearance } from "@redwallsolutions/theming-component-module";
import Color from 'color';
export const theme = createThemeWithAppearance();
const defaultProps = {
  theme: {
    mode: 'light'
  },
  appearance: 'default'
};
const DialogGlobalStyles = createGlobalStyle(_templateObject(), props => theme(props).contrast, props => Color(theme(props).contrast(props)).lighten(0.2).string(), props => Color(theme(props).color(props)).grayscale().string(), props => theme(props).contrast, props => Color(theme(props).color(props)).grayscale().string(), props => Color(theme(props).color(props)).grayscale().string(), props => Color(theme(props).color(props)).fade(0.03).darken(0.9).string());
DialogGlobalStyles.defaultProps = defaultProps;
export { DialogGlobalStyles };
const FlexContainer = styled.div(_templateObject2());
const DialogHeader = styled(FlexContainer)(_templateObject3());
DialogHeader.defaultProps = defaultProps;
export { DialogHeader };
export const DialogHeaderIcon = styled.span(_templateObject4());
export const DialogHeaderTitleContainer = styled(FlexContainer)(_templateObject5());
export const DialogHeaderTitle = styled.h1(_templateObject6());
const DialogHeaderSubtitle = styled.h2(_templateObject7(), props => Color(theme(props).color(props)).fade(0.3).string());
DialogHeaderSubtitle.defaultProps = defaultProps;
export { DialogHeaderSubtitle };