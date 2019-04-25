import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n  margin: 3px 0 0 0;\n  font-size: 14px;\n  font-weight: normal;\n  letter-spacing: .8px;\n  color: ", "\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  font-weight: bolder;\n  font-size: 18px;\n  margin: 0;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  flex-direction: column;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  max-width: 100px;\n  padding: 0 15px;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  padding: 1.3em;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: 'center';\n  padding: 0;\n  margin: 0;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  @font-face {\n    font-family: Poppins;\n    src: url(", ") format(\"TrueType\");\n    font-style: light;\n    font-weight: 200;\n    font-display: fallback;\n  }\n\n  .dialog-component-module {\n    font-family: 'Poppins', cursive;\n  }\n\n  .rc-dialog-content {\n    background: none !important;\n  }\n\n  .rc-dialog-header {\n    border-bottom: none !important;\n    border-radius: 7px 7px 0 0 !important;\n    padding:0 !important;\n    margin: 0 !important;\n    background: linear-gradient(225deg, ", ", ", ") !important;\n    color: ", " !important;\n  }\n\n  .rc-dialog-body {\n    border-radius: 0 0 7px 7px !important;\n    background-color: ", " !important;\n    color: ", ";\n  }\n\n  .rc-dialog-close {\n    opacity: .6 !important;\n    filter: none !important;\n    color: ", " !important;\n    text-shadow: none !important;\n    transition: all .2s !important;\n    font-size: 27px !important;\n    :hover {\n      opacity: 1 !important;\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

import styled, { createGlobalStyle } from 'styled-components';
import Poppins from './../assets/fonts/Poppins-Regular.ttf';
import Theming from 'theming-component-module';
import Color from 'color';
export var theme = Theming.createThemeWithAppearance();
var defaultProps = {
  theme: {
    mode: 'light'
  },
  appearance: 'primary'
};
var DialogGlobalStyles = createGlobalStyle(_templateObject(), Poppins, function (props) {
  return theme(props).contrast;
}, function (props) {
  return Color(theme(props).contrast(props)).lighten(0.2).string();
}, function (props) {
  return theme(props).color;
}, function (props) {
  return theme(props).contrast;
}, function (props) {
  return theme(props).color;
}, function (props) {
  return props.theme.mode === 'light' ? Color(theme(props).color(props)).grayscale().string() : theme(props).color;
});
DialogGlobalStyles.defaultProps = defaultProps;
export { DialogGlobalStyles };
var FlexContainer = styled.div(_templateObject2());
var DialogHeader = styled(FlexContainer)(_templateObject3());
DialogHeader.defaultProps = defaultProps;
export { DialogHeader };
export var DialogHeaderIcon = styled.span(_templateObject4());
export var DialogHeaderTitleContainer = styled(FlexContainer)(_templateObject5());
export var DialogHeaderTitle = styled.h1(_templateObject6());
var DialogHeaderSubtitle = styled.h2(_templateObject7(), function (props) {
  return Color(theme(props).color(props)).fade(.3).string();
});
DialogHeaderSubtitle.defaultProps = defaultProps;
export { DialogHeaderSubtitle };