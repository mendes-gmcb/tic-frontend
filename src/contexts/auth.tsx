import React, { ReactNode, createContext, useState, useEffect } from "react";
import { apiLocal } from "../services/api";

type User = {
  id: string;
  name: string;
  email: string;
  phone: string;
  created_at: string;
  updated_at: string;
};

type Credentials = {
  email: string;
  password: string;
}

type AuthContextData = {
  user: User | null;
  signOut: () => void;
  signIn: (credentials: Credentials) => void;
};

type AuthResponse = {
  user: {
    id: string;
    name: string;
    email: string;
    phone: string;
    created_at: string;
    updated_at: string;
  };
  token: string;
};

export const AuthContext = createContext({} as AuthContextData);

type AuthProvider = {
  children: ReactNode;
};

export function AuthProvider(props: AuthProvider) {
  const [user, setUser] = useState<User | null>(null);

  async function signIn(credentials: Credentials) {
    const response = await apiLocal.post<AuthResponse>("/session", credentials);

    const { token, user } = response.data;

    localStorage.setItem("@tic:token", token);

    apiLocal.defaults.headers.common.authorization = `Bearer ${token}`;

    setUser(user);
  }

  function signOut() {
    setUser(null);
    localStorage.removeItem("@tic:token");
  }

  useEffect(() => {
    const token = localStorage.getItem("@tic:token");

    if (token) {
      apiLocal.defaults.headers.common.authorization = `Bearer ${token}`;

      apiLocal.get<User>("/user/show").then((response) => {
        setUser(response.data);
      });
    }
  }, []);

  return (
    <AuthContext.Provider value={{ user, signOut, signIn }}>
      {props.children}
    </AuthContext.Provider>
  );
}
