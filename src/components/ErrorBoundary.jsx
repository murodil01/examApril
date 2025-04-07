import React, { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Xatolikni ushlash va state'ni yangilash
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // Xatolik haqida log yozish
    console.error("ErrorBoundary caught an error", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // Xatolik yuz berayotganda foydalanuvchiga bildirish
      return <h1>Bir xatolik yuz berdi. Iltimos, qayta urinib ko'ring.</h1>;
    }

    return this.props.children; 
  }
}

export default ErrorBoundary;
