import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { ErrorBoundary, ErrorFallback } from 'components';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './index.css';

const ErrorBoundaryApp = () => {
  const [hasError, setHasError] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string>();

  const handleError = (message?: string) => {
    setHasError(true);
    setErrorMessage(message);
  };

  if (hasError) return <ErrorFallback message={errorMessage} />;
  return (
    <ErrorBoundary fallback={<ErrorFallback message='Внутренняя ошибка' />}>
      <App onError={handleError} />
    </ErrorBoundary>
  );
};

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ErrorBoundaryApp />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
