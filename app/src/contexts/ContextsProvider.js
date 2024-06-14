"use client";
import { AuthProvider } from "./authContext";

const ContextsProvider = ({ children }) => {
  return <AuthProvider>{children}</AuthProvider>;
};

export default ContextsProvider;
// Path: app/src/contexts/ContextsProvider.js
