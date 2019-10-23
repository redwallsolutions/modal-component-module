import { useContext } from 'react';
import ModalContext from './ModalContext';

var useModalController = function useModalController() {
  var controller = useContext(ModalContext);
  return controller;
};

export default useModalController;