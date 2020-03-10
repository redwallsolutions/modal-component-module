import { useContext } from 'react';
import ModalContext from './ModalContext';

const useModalController = () => {
  const controller = useContext(ModalContext);
  return controller;
};

export default useModalController;