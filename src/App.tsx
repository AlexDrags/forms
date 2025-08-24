import './App.css';
import useModal from './hooks/useModal';
import ControllForm from './components/ControllForm/controllForm';
import UnControllForm from './components/UnControllForm/UnControllForm';
import { useReactFormState } from './store/formsStore';
import { useEffect } from 'react';

function App() {
  const {
    isShowingControll,
    toggleControllForm,
    isShowingUnControll,
    toggleUnControllForm,
  } = useModal();
  const formDataState = useReactFormState((state) => state.data);
  useEffect(() => {
    console.log(formDataState);
  }, [isShowingControll, formDataState]);
  return (
    <>
      {!isShowingControll && formDataState && (
        <div className="controll-result">
          <h2>Result submit from Controll From:</h2>
          <p>Name {formDataState.name}</p>
          <p>Age {formDataState.age}</p>
          <p>Country {formDataState.country}</p>
          <p>Email {formDataState.email}</p>
          <p>Password {formDataState.password}</p>
          <p>Agreement {formDataState.agreement && 'accept'}</p>
          <p>Image </p>
        </div>
      )}
      <ControllForm isShowing={isShowingControll} hide={toggleControllForm} />
      <button type="button" onClick={toggleControllForm}>
        controlled components
      </button>
      <UnControllForm
        isShowing={isShowingUnControll}
        hide={toggleUnControllForm}
      />
      <button type="button" onClick={toggleUnControllForm}>
        uncontrolled components
      </button>
    </>
  );
}

export default App;
