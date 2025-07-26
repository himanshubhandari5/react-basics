import { Component, type ErrorInfo } from 'react';

interface Props {
  children: React.ReactNode;
}

interface State {
  error?: Error;
  info?: ErrorInfo;
  hasError: boolean;
}

class ErrorHandler extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      error: undefined,
      info: undefined,
      hasError: false,
    } as State;
  }

  static getDerivedStateFromError(error: Error): State {
    console.log('error?: ' + error);
    return { error: error, info: error.stack as ErrorInfo, hasError: true };
  }

  componentDidCatch(error: Error, info: React.ErrorInfo): void {
    this.setState({
      error,
      info,
    });
  }

  render() {
    if (this.state.hasError) {
      return (
        <>
          <p>
            Is there any Error:{' '}
            {this.state.error ? this.state.error.message : ''}
          </p>
          <p>
            Error Info: {this.state.info ? this.state.info.componentStack : ''}
          </p>
        </>
      );
    }
    return this.props.children;
  }
}

export default ErrorHandler;
