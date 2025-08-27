import './App.css';
import useModal from './hooks/useModal';
import ControllForm from './components/ControllForm/controllForm';
import UnControllForm from './components/UnControllForm/UnControllForm';
import { useReactFormState, useUnControllFormState } from './store/formsStore';
import { useEffect } from 'react';

function App() {
  const {
    isShowingControll,
    toggleControllForm,
    isShowingUnControll,
    toggleUnControllForm,
  } = useModal();
  const formDataState = useReactFormState((state) => state.data);
  const unFormDataState = useUnControllFormState((state) => state.data);
  useEffect(() => {}, [
    isShowingControll,
    formDataState,
    isShowingUnControll,
    unFormDataState,
  ]);
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
          <p>
            <img src={formDataState.base} width={300} height={300} />
          </p>
        </div>
      )}
      <ControllForm isShowing={isShowingControll} hide={toggleControllForm} />
      <button type="button" onClick={toggleControllForm}>
        controlled components
      </button>
      {!isShowingUnControll && unFormDataState && (
        <div className="uncontroll-result">
          <h2>Result submit from UnControll From:</h2>
          <p>Name {unFormDataState.name}</p>
          <p>Age {unFormDataState.age}</p>
          <p>Country {unFormDataState.country}</p>
          <p>Email {unFormDataState.email}</p>
          <p>Password {unFormDataState.password}</p>
          <p>Agreement {unFormDataState.agreement && 'accept'}</p>
          <p>
            <img src={unFormDataState.base} width={300} height={300} />
          </p>
        </div>
      )}
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
