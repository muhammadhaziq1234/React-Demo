import Routes from './routes';
import { BrowserRouter } from 'react-router-dom'
import AppErrorBoundary from './utils/ErrorBoundary';
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
