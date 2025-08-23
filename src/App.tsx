import './App.css';
import useModal from './hooks/useModal';
import ControllForm from './components/ControllForm/controllForm';
import UnControllForm from './components/UnControllForm/UnControllForm';

function App() {
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
      />
      <button type="button" onClick={toggleUnControllForm}>
        controlled components
      </button>
    </>
  );
}

export default App;
