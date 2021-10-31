import React from "react";
import { useAuth } from "./contexts/AuthContext";
import { Route, Navigate } from "react-router-dom";

export function PrivateRoute({ element, path }) {
  const { currentUser } = useAuth();

  const ele = currentUser !== null ? element : <Navigate to="/login" replace />;

  return <Route path={path} element={ele} />;
}

export function AuthPrivateRoute({ element, path }) {
  const { currentUser } = useAuth();

  const ele = currentUser !== null ? <Navigate to="/" replace /> : element;

  return <Route path={path} element={ele} />;
}
