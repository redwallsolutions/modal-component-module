import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n  margin: 3px 0 0 0;\n  font-size: 14px;\n  color: rgb(120,120,120);\n  font-weight: normal;\n  letter-spacing: .8px;\n"]);

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
  var data = _taggedTemplateLiteral(["\n  @font-face {\n    font-family: Poppins;\n    src: url(", ") format(\"TrueType\");\n    font-style: light;\n    font-weight: 200;\n    font-display: fallback;\n  }\n\n  .dialog-component-module {\n    font-family: 'Poppins', cursive;\n    color: rgb(69,69,69);\n  }\n  .rc-dialog-header {\n    border-bottom: none;\n    padding:0;\n    margin: 0;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

import styled, { createGlobalStyle } from 'styled-components';
import Poppins from './../assets/fonts/Poppins-Regular.ttf';
export var DialogGlobalStyles = createGlobalStyle(_templateObject(), Poppins);
var FlexContainer = styled.div(_templateObject2());
export var DialogHeader = styled(FlexContainer)(_templateObject3());
export var DialogHeaderIcon = styled.span(_templateObject4());
export var DialogHeaderTitleContainer = styled(FlexContainer)(_templateObject5());
export var DialogHeaderTitle = styled.h1(_templateObject6());
export var DialogHeaderSubtitle = styled.h2(_templateObject7());