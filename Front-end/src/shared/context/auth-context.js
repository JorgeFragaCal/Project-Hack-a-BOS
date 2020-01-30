import React, { useState, useContext } from "react";
import decode from "jwt-decode";
import { login, register } from "../../http";
import { useHistory } from "react-router-dom";

const AuthContext = React.createContext();
const currentUser = JSON.parse(localStorage.getItem("currentUser"));

/*------------------------------------ */
export function tokenDecoded(token) {
  if (currentUser !== null) {
    const { userType } = decode(currentUser.token);
    return userType;
  }
}

export function AuthProvider({ children }) {
  const [userType, setUserType] = useState(
    (currentUser && tokenDecoded(currentUser.token)) || null
  );
  const [user, setUser] = useState(currentUser && currentUser);
  const [isAuthenticated, setIsAuthenticated] = useState(currentUser !== null);
  const history = useHistory();

  const signIn = async ({ email, password }) => {
    try {
      const {
        data: { token, userData }
      } = await login(email, password);
      const { userType } = decode(token);
      const user = { userData, token };
      setUser(user);
      setIsAuthenticated(true);
      setUserType(userType);
      if (token) {
        history.push("/");
      }
    } catch (error) {
      return Promise.reject(error);
    }
  };

  const signUp = async ({
    username,
    name,
    lastName,
    email,
    phone,
    password,
    avatar,
    address,
    city,
    country,
    userType
  }) => {
    try {
      const {
        data: { dataUser, token }
      } = await register({
        username,
        name,
        lastName,
        email,
        phone,
        password,
        avatar,
        address,
        city,
        country,
        userType
      });
      const user = dataUser;
      setUser(user);
      setUserType(userType);
      if (token) {
        history.push("/");
      }
    } catch (error) {
      return Promise.reject(error);
    }
  };
  const logout = () => {
    setUser(null);
    setUserType(false);
    setIsAuthenticated(false);
    localStorage.removeItem("currentUser");
    history.push("/");
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        setIsAuthenticated,
        userType,
        setUserType,
        signIn,
        user,
        signUp,
        logout
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  return context;
}
