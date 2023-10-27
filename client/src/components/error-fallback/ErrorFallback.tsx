import css from './ErrorBoundary.module.css';

type Props = { message?: string };

/**
 * Заглушка на ошибки.
 */
const ErrorFallback = (props: Props) => {
  const { message } = props;
  return (
    <div className={css['fallback']}>
      <div>{'(>_<)'}</div>
      {message && <div className={css['message']}>{message}</div>}
    </div>
  );
};

export default ErrorFallback;
