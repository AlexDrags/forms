import './App.css';
import useModal from './hooks/useModal';
import ReactForm from './components/ReactForm/ReactForm';

function App() {
  const { isShowing, toggle } = useModal();
  return (
    <>
      <ReactForm isShowing={isShowing} hide={toggle} />
      <button type="button" onClick={toggle}>
        uncontrolled components
      </button>
      <button type="button" onClick={toggle}>
        controlled components
      </button>
    </>
  );
}

export default App;
