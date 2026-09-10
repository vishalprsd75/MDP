import React from 'react';

/**
 * Robust Error Boundary component to prevent blank screen crashes.
 * Catches any render-time JavaScript exceptions and displays a graceful fallback.
 */
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
  }

  handleReset = () => {
    this.setState({ hasError: false, error: null });
    if (typeof window !== 'undefined') {
      window.location.hash = '#hero';
    }
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-[70vh] flex items-center justify-center p-6 text-center">
          <div className="max-w-md w-full p-8 rounded-2xl bg-[#101726] border border-brand-gold/30 text-white shadow-2xl">
            <div className="text-4xl mb-3">⚠️</div>
            <h2 className="text-xl font-bold text-brand-gold mb-2">Notice</h2>
            <p className="text-xs sm:text-sm text-gray-300 mb-6 leading-relaxed">
              We encountered an issue loading this preview module. You can return to the main showcase or reload.
            </p>
            <div className="flex items-center justify-center gap-3">
              <button
                onClick={this.handleReset}
                className="px-5 py-2.5 rounded-xl text-xs font-bold bg-gold-gradient text-brand-dark hover:opacity-90 transition-all cursor-pointer"
              >
                Return to Home
              </button>
              <button
                onClick={() => window.location.reload()}
                className="px-4 py-2.5 rounded-xl text-xs font-bold border border-gray-700 text-gray-300 hover:border-gray-500 transition-all cursor-pointer"
              >
                Reload Page
              </button>
            </div>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
