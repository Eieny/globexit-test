import React from 'react';

type Props = {
  /**
   * Заглушка, отображающаяся при отлове ошибки.
   */
  fallback: React.ReactNode;
  children?: React.ReactNode;
};
type ErrorStateType = { hasError: boolean };

/**
 * Компонент для отлова ошибок.
 */
class ErrorBoundary extends React.Component<Props, ErrorStateType> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) return this.props.fallback;
    return this.props.children;
  }
}

export default ErrorBoundary;
