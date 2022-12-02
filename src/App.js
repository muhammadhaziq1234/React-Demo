import Routes from './routes';
import { BrowserRouter } from 'react-router-dom';
import AppErrorBoundary from './utils/ErrorBoundary';

/** App Component First Render Component With Error Boundar And Routes */
function App() {
  return (
    <AppErrorBoundary>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </AppErrorBoundary>
  );
}

export default App;
