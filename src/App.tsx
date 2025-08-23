import './App.css';
import { useRef } from 'react';
import useModal from './hooks/useModal';
import ControllForm from './components/ControllForm/controllForm';
import UnControllForm from './components/UnControllForm/UnControllForm';
import React from 'react';

function App() {
  const formRef = useRef<HTMLFormElement>(null);
  const {
    isShowingControll,
    toggleControllForm,
    isShowingUnControll,
    toggleUnControllForm,
  } = useModal();

  return (
    <>
      <ControllForm isShowing={isShowingControll} hide={toggleControllForm} />
      <button type="button" onClick={toggleControllForm}>
        uncontrolled components
      </button>
      <UnControllForm
        isShowing={isShowingUnControll}
        hide={toggleUnControllForm}
        ref={formRef}
      />
      <button type="button" onClick={toggleUnControllForm}>
        controlled components
      </button>
    </>
  );
}

export default App;
