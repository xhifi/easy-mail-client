"use client";

import { useContext } from "react";
import { AuthContext } from "../contexts/authContext";

export default function useAuthContext() {
  const context = useContext(AuthContext);

  if (context === undefined) {
    throw new Error("useAuthContext must be used within an AuthProvider");
  }
  return context;
}
