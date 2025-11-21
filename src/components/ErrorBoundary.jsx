import React from "react";

// Minimal ErrorBoundary using class field for state (no constructor)
class ErrorBoundary extends React.Component {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    // Simple logging for development
    console.error("ErrorBoundary caught an error:", error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="max-w-4xl mx-auto p-8 text-center">
          <h2 className="text-2xl font-semibold mb-4">Something went wrong</h2>
          <p className="text-gray-600 mb-4">
            A part of the page failed to load. Please refresh.
          </p>
          <button
            onClick={() => window.location.reload()}
            className="px-4 py-2 bg-rose-500 text-white rounded"
          >
            Reload
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
