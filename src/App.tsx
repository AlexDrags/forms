import './App.css';
import Loading from './components/Loading/Loading';
import Error from './components/Error/Error';
import { Suspense, useState } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import List from './components/List/List';
import Modal from './components/Modal/Modal';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <button type="button" onClick={() => setIsOpen(!isOpen)}>
        {!isOpen ? 'Show more' : 'Close modal window'}
      </button>
      <h1>CO2 emissions data by countries</h1>
      <ErrorBoundary fallback={<Error />}>
        <Suspense fallback={<Loading />}>
          <Modal isopen={isOpen} />
          <List />
        </Suspense>
      </ErrorBoundary>
    </>
  );
}

export default App;
