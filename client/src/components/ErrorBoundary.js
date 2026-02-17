"use client";

import { Component } from "react";

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("ErrorBoundary caught:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <section className="error-boundary" aria-label="Error">
          <p className="error-boundary__text">
            Something went wrong. Please try refreshing the page.
          </p>
        </section>
      );
    }

    return this.props.children;
  }
}
