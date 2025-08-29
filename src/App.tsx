import './App.css';
import Loading from './components/Loading/Loading';
import Error from './components/Error/Error';
import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import List from './components/List/List';

function App() {
  return (
    <>
      <h1>Vite + React</h1>
      <ErrorBoundary fallback={<Error />}>
        <Suspense fallback={<Loading />}>
          <List />
        </Suspense>
      </ErrorBoundary>
    </>
  );
}

export default App;
