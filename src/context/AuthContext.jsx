"use client";

import { createContext, useState, useEffect, useContext } from "react";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if user is logged in from localStorage
    const user = localStorage.getItem("user");
    if (user) {
      setCurrentUser(JSON.parse(user));
    }
    setLoading(false);
  }, []);

  const login = (userData) => {
    // Store user data in localStorage
    localStorage.setItem("user", JSON.stringify(userData));
    setCurrentUser(userData);
  };

  const logout = () => {
    // Remove user data from localStorage
    localStorage.removeItem("user");
    setCurrentUser(null);
  };

  const deleteAccount = () => {
    // Get all users from localStorage
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    // Filter out the current user
    const updatedUsers = users.filter(
      (user) => user.email !== currentUser.email
    );
    // Update localStorage
    localStorage.setItem("users", JSON.stringify(updatedUsers));
    // Logout
    logout();
  };

  const value = {
    currentUser,
    login,
    logout,
    deleteAccount,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
