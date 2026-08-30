import React from 'react';

/**
 * Temporary local development version.
 * Directly renders children so you can view and style all Admin routes without login blocks.
 */
const ProtectedRoute = ({ children }) => {
  return children;
};

export default ProtectedRoute;